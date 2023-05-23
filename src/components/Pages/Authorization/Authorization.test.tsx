import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Authorization from './Authorization';

const setup = () => {
  return render(
    <MemoryRouter>
      <Authorization setUser={jest.fn} />
    </MemoryRouter>,
  );
};

describe('Authorization', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Authorization setUser={jest.fn} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to be enable', async () => {
    setup();
    const email = screen.getByLabelText(/Введите email/i);
    const password = screen.getByLabelText(/Введите пароль/i);
    const submitButton = screen.getByTestId('postData');
    await userEvent.type(email, 'test@mail.ru');
    await userEvent.type(password, 'test');
    await waitFor(() => expect(submitButton).toBeEnabled());
  });
  test('to be disabled with incorrect email', async () => {
    setup();
    const email = screen.getByLabelText(/Введите email/i);
    const password = screen.getByLabelText(/Введите пароль/i);
    const submitButton = screen.getByTestId('postData');
    await userEvent.type(email, 'test');
    await userEvent.type(password, 'test');
    await waitFor(() => expect(submitButton).toBeDisabled());
  });
  test('to be disabled with password length < 3', async () => {
    setup();
    const email = screen.getByLabelText(/Введите email/i);
    const password = screen.getByLabelText(/Введите пароль/i);
    const submitButton = screen.getByTestId('postData');
    await userEvent.type(email, 'test@mail.ru');
    await userEvent.type(password, 'te');
    await userEvent.click(submitButton);
    screen.queryByText(/слишком короткий пароль/i);
    await waitFor(() => expect(submitButton).toBeDisabled());
  });
});
