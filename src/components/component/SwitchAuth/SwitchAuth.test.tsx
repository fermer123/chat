import renderer from 'react-test-renderer';
import SwitchAuth, {ISwitchAuth} from './SwitchAuth';

describe('SwitchAuth', () => {
  const action = jest.fn();
  const customProps: ISwitchAuth = {
    switchAuthForm: action,
    switchAuth: true,
  };
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<SwitchAuth {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
