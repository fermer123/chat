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
  // eslint-disable-next-line jest/no-commented-out-tests
  test('register', async () => {
    const data = {
      email: 'test@mail.ru',
      password: 'qwe',
      id: '100',
    };
    const resp = await axios.post('/register', data);
    expect(resp.status).toBe(404);
    expect(resp.data).toBeDefined();
  });
});
