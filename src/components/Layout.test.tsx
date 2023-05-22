import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Layout />
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
