import {v4 as uuidv4} from 'uuid';
import {IUserAuthProps} from '@src/types';
import axios from './index';

const userLogin = async <T>({
  email,
  password,
  setError,
  setUser,
  push,
}: IUserAuthProps<T>) => {
  try {
    await axios.post(
      '/login',
      {
        email,
        password,
        id: uuidv4(),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    setUser(email);
    setError('');
    push('/room');
  } catch (error: unknown) {
    if (error instanceof Error) {
      setError(error.message);
    }
    setError(String(error));
  }
};

export default userLogin;
