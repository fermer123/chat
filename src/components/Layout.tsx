import {useLocation, Route, Routes} from 'react-router-dom';
import {FC, useEffect, useState} from 'react';
import Authorization from './Pages/Authorization/Authorization';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';

const Layout: FC = () => {
  const [user, setUser] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    const localStorageItem = localStorage.getItem('user');
    if (localStorageItem) {
      setUser(localStorageItem);
    }
  }, []);

  return (
    <>
      {location.pathname !== '/' ? <Header user={user} /> : ''}
      <Routes>
        <Route path='/' element={<Authorization />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
};

export default Layout;
