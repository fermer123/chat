import {FC, ReactElement} from 'react';
import {Navigate} from 'react-router-dom';

interface IProtectedRouteProps {
  user: string;
  children: ReactElement | null;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({children, user}) => {
  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;
