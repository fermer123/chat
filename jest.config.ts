import type {JestConfigWithTsJest} from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>/src/**/*.test.ts',
    '<rootDir>/src/**/*.test.tsx',
    '<rootDir>/index.test.ts',
  ],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      },
    ],
  },
  moduleNameMapper: {
    '^@src(.*)$': '<rootDir>/src$1',
    uuid: require.resolve('uuid'),
    '@mui/styled-engine': '<rootDir>/node_modules/@mui/styled-engine-sc',
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
};

export default jestConfig;
