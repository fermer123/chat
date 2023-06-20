import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

describe('Header', () => {
  const setup = () => {
    return render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  };

  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
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
