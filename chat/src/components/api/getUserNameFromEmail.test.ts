import getUserNameFromEmail from './getUserNameFromEmail';

describe('getUserNameFromEmail', () => {
  test('return username', () => {
    expect(getUserNameFromEmail('test@mail.ru')).toBe('test');
  });
  test('return all input value', () => {
    expect(getUserNameFromEmail('testmail.ru')).toBe('testmail.ru');
  });
  test('empty email', () => {
    expect(getUserNameFromEmail('')).toBe('');
  });
});
