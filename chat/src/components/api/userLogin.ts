import {AxiosError, isAxiosError} from 'axios';
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
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      setError(String(axiosError.response?.data) ?? 'error');
    } else {
      setError(String(error));
    }
  }
};

export default userLogin;
