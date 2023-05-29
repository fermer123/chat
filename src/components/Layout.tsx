import {useLocation, Route, Routes} from 'react-router-dom';
import {FC, Suspense, lazy} from 'react';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';
import SelectRoom from './Pages/SelectRoom/SelectRoom';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import Loading from './component/Loading/Loading';

const Authorization = lazy(() => import('./Pages/Authorization/Authorization'));

const Layout: FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' ? <Header /> : ''}
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <Authorization />
            </Suspense>
          }
        />

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
