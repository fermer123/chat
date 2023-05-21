import {useLocation, Route, Routes} from 'react-router-dom';
import {FC, useEffect, useState} from 'react';
import Authorization from './Pages/Authorization/Authorization';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';

const Layout: FC = () => {
  const [token, setToken] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    return () => {
      const localStorageItem = localStorage.getItem('user');
      if (localStorageItem) {
        setToken(localStorageItem);
      }
    };
  }, [token]);

  return (
    <>
      {location.pathname !== '/' ? <Header token={token} /> : ''}
      <Routes>
        <Route path='/' element={<Authorization />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
};

export default Layout;
