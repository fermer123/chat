/* eslint-disable react/no-children-prop */
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

describe('protectedRoute', () => {
  const children = <div>Test</div>;

  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ProtectedRoute children={children} />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
