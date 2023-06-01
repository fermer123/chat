import {v4 as uuidv4} from 'uuid';
import {IUserAuthProps} from '@src/types';
import {isAxiosError, AxiosError} from 'axios';
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
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      setError(String(axiosError.response?.data) ?? 'error');
    } else {
      setError(String(error));
    }
  }
};

export default userRegister;
