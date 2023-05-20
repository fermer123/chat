import {useLocation, Route, Routes} from 'react-router-dom';
import {FC, useEffect, useState} from 'react';
import Authorization from './Pages/Authorization/Authorization';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';

const Layout: FC = () => {
  const [token, setToken] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  useEffect(() => {
    const localStorageItem = localStorage.getItem('user');
    if (localStorageItem) {
      setToken(localStorageItem);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {location.pathname !== '/' ? <Header token={token} /> : ''}
      <Routes>
        <Route path='/' element={<Authorization setToken={setToken} />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
};

export default Layout;
