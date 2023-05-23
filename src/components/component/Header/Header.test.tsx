import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import Header, {IHeaderProps} from './Header';

describe('Header', () => {
  const customProps: IHeaderProps = {
    user: 'qwe@mail.ru',
    setUser: jest.fn,
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
    render(
      <MemoryRouter>
        <Header {...customProps} />
      </MemoryRouter>,
    );
    const avatarElement = screen.getByText('q');
    expect(avatarElement).toBeInTheDocument();
  });
});
