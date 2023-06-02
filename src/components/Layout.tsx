import {useLocation, Route, Routes} from 'react-router-dom';
import {FC, Suspense, lazy} from 'react';
import Chat from './Pages/Chat/Chat';
import Header from './component/Header/Header';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';
import Loading from './component/Loading/Loading';
import LoadingRoom from './component/Loading/LoadingRoom';

const Authorization = lazy(() => import('./Pages/Authorization/Authorization'));
const SelectRoom = lazy(() => import('./Pages/SelectRoom/SelectRoom'));
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
              <Suspense fallback={<LoadingRoom />}>
                <SelectRoom />
              </Suspense>
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
