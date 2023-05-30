import {v4 as uuidv4} from 'uuid';
import {IUserAuthProps} from '@src/types';
import axios from './index';

const userRegister = async <T>({
  email,
  password,
  setError,
  setUser,
  push,
}: IUserAuthProps<T>) => {
  try {
    await axios.post(
      '/register',
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

export default userRegister;
