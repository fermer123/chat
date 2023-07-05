import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type {Configuration} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

const analyzerOptions = {
  openAnalyzer: true,
  AnalyserMode: 'static',
  reportFilename: path.join(__dirname, 'dist/bundle-analysis.html'),
};

const devServer: DevServerConfiguration = {
  port: 3001,
  open: true,
  historyApiFallback: true,
  // proxy: {
  //   '/chat': {
  //     target: 'http://localhost:3000',
  //   },
  // },
};

const config: Configuration = {
  entry: path.join(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
    chunkFilename: '[name].[contenthash].js',
  },
  optimization: {
    chunkIds: 'named',
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  devServer,
  devtool: 'source-map',
  experiments: {
    topLevelAwait: true,
  }, // only before 5.83
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new BundleAnalyzerPlugin(analyzerOptions),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
    ],
  },
};

export default config;
