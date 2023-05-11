import request from 'supertest';
import app from './index';

describe('express', () => {
  test('success', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });
});
