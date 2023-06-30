import {AxiosError, isAxiosError} from 'axios';

import axios from './index';

describe('axiosCreate', () => {
  test('baseURL', () => {
    expect(axios.defaults.baseURL).toBe('http://localhost:3000/');
  });
  test('login', async () => {
    const data = {
      email: 'qwe@mail.ru',
      password: 'qwe',
      id: '1',
    };
    const resp = await axios.post('/login', data);
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
  test('not correct login', async () => {
    const data = {
      email: 'qwe1@mail.ru',
      password: 'qwe',
      id: '1',
    };
    try {
      await axios.post('/login', data);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;
        // eslint-disable-next-line jest/no-conditional-expect
        expect(axiosError.response?.status).toBe(400);
      }
    }
  });
});
