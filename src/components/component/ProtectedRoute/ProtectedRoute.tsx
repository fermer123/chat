import {FC, ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import useLocalStorage from '../Hooks/useLocalStorage';

export interface IProtectedRouteProps {
  children: ReactElement | null;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({children}) => {
  const [user] = useLocalStorage<string>('user', 'default');

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
};
export default ProtectedRoute;
