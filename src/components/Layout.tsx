import {useLocation, Route, Routes} from 'react-router-dom';
import {FC} from 'react';
import Chat from './Page/Chat/Chat';
import Authorization from './Page/Authorization/Authorization';

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
