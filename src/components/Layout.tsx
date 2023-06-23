import {FC, lazy, Suspense} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';

import Header from './component/Header/Header';
import Loading from './component/Loading/Loading';
import LoadingRoom from './component/Loading/LoadingRoom';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

const {default: Chat} = await import('./Pages/Chat/Chat');

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
