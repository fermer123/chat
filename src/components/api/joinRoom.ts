import {v4 as uuidv4} from 'uuid';
import {AxiosError, isAxiosError} from 'axios';
import {IUserJoinRoom} from '@src/types';
import axios from './index';

const joinRoom = async ({
  email,
  push,
  selectRoom,
  userName,
  setError,
}: IUserJoinRoom) => {
  try {
    await axios.post(
      '/room',
      {
        userName,
        email,
        selectRoom,
        id: uuidv4(),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    setError('');
    push(`/chat`);
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      setError(String(axiosError.response?.data) ?? 'error');
    } else {
      setError(String(error));
    }
  }
};

export default joinRoom;
