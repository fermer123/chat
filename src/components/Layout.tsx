import {useLocation, Route, Routes} from 'react-router-dom';
import {FC, useEffect, useState, useCallback} from 'react';
import Authorization from './Pages/Authorization/Authorization';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';
import SelectRoom from './Pages/SelectRoom/SelectRoom';

const Layout: FC = () => {
  const [user, setUser] = useState<string>('');
  const location = useLocation();
  useEffect(() => {
    const localStorageItem = localStorage.getItem('user');
    if (localStorageItem) {
      setUser(localStorageItem);
    }
  }, [setUser]);

  const setUserItem = useCallback(
    (userItem: string) => {
      setUser(userItem);
    },
    [setUser],
  );

  return (
    <>
      {location.pathname !== '/' ? (
        <Header setUser={setUserItem} user={user} />
      ) : (
        ''
      )}
      <Routes>
        <Route path='/' element={<Authorization setUser={setUserItem} />} />
        <Route path='/room' element={<SelectRoom />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
};

export default Layout;
