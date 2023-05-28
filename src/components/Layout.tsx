import {useLocation, Route, Routes} from 'react-router-dom';
import {FC} from 'react';
import Authorization from './Pages/Authorization/Authorization';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';
import SelectRoom from './Pages/SelectRoom/SelectRoom';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' ? <Header /> : ''}
      <Routes>
        <Route path='/' element={<Authorization />} />

        <Route
          path='/room'
          element={
            <ProtectedRoute>
              <SelectRoom />
            </ProtectedRoute>
          }
        />
        <Route
          path='/chat'
          element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Layout;
