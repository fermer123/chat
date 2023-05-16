import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import Layout from './components/Layout';
import Loading from './components/component/Loading/Loading';
import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  </BrowserRouter>,
);
