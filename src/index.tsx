import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import Layout from './components/Layout';
import Loading from './components/component/Loading/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  </BrowserRouter>,
);
