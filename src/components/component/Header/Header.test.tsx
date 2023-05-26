import renderer from 'react-test-renderer';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header, {IHeaderProps} from './Header';

describe('Header', () => {
  const setUser = jest.fn();
  const customProps: IHeaderProps = {
    user: 'qwe@mail.ru',
    setUser,
  };
  const setup = () => {
    return render(
      <MemoryRouter>
        <Header {...customProps} />
      </MemoryRouter>,
    );
  };

  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header {...customProps} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to be in the document', () => {
    setup();
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
  });
  test('render without errors', () => {
    setup();
    const linkElement = screen.getByTestId('AvatarButton');
    expect(linkElement).toBeInTheDocument();
    const popover = screen.queryByTestId('popover');
    expect(popover).not.toBeInTheDocument();
  });
  test('show modal', async () => {
    setup();
    const linkElement = screen.getByTestId('AvatarButton');
    expect(screen.queryByTestId('popover')).not.toBeInTheDocument();
    await userEvent.click(linkElement);
    expect(screen.getByTestId('popover')).toBeInTheDocument();
  });
  test('close modal', async () => {
    setup();
    const linkElement = screen.getByTestId('AvatarButton');
    await userEvent.click(linkElement);
    expect(screen.getByTestId('popover')).toBeInTheDocument();
    fireEvent.keyDown(screen.getByTestId('popover'), {
      key: 'Escape',
      code: 'Escape',
    });
    await waitFor(() =>
      expect(screen.queryByTestId('popover')).not.toBeVisible(),
    );
  });
});
