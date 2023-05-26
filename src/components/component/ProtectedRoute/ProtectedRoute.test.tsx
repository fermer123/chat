/* eslint-disable react/no-children-prop */
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

describe('protectedRoute', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ProtectedRoute user='user' children={<>test</>} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render if user', () => {
    render(
      <MemoryRouter>
        <ProtectedRoute user='user' children={<>test</>} />
      </MemoryRouter>,
    );
    const children = screen.getByText(/test/i);
    expect(children).toBeInTheDocument();
  });
  test('should redirect if no user', () => {
    render(
      <MemoryRouter>
        <ProtectedRoute user='' children={<>test</>} />
      </MemoryRouter>,
    );
    expect(screen.queryByText(/test/i)).not.toBeInTheDocument();
  });
});
