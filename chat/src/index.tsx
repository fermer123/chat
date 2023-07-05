import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';

import Layout from './components/Layout';
import GlobalStyle from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <GlobalStyle />
    <Layout />
  </HashRouter>,
);
