import renderer from 'react-test-renderer';
import Authorization from './Authorization';

describe('Authorization', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<Authorization />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
