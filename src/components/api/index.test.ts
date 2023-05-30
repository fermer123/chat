import axios from './index';

describe('AxiosCreate', () => {
  test('baseURL', () => {
    expect(axios.defaults.baseURL).toBe('http://localhost:3000/');
  });
  test('login', async () => {
    const resp = await axios.post('/login', {
      email: 'qwe@mail.ru',
      password: 'qwe',
    });
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
  test('register', async () => {
    const resp = await axios.post('/register', {
      email: 'testing@mail.ru',
      password: 'testing',
    });
    expect(resp.status).toBe(200);
    expect(resp.data).toBeDefined();
  });
});
