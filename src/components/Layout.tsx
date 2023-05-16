import {useLocation, Route, Routes} from 'react-router-dom';
import {FC} from 'react';
import Authorization from './Pages/Authorization/Authorization';
import Chat from './Pages/Chat/Chat';

const Layout: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const location = useLocation();
  return (
    <Routes>
      <Route path='/' element={<Authorization />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  );
};

export default Layout;
