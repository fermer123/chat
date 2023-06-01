import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import SwitchAuth, {ISwitchAuth} from './SwitchAuth';

describe('SwitchAuth', () => {
  const switchAuthForm = jest.fn();
  const customProps: ISwitchAuth = {
    switchAuthForm,
    switchAuth: true,
  };
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<SwitchAuth {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to be in the document', () => {
    render(<SwitchAuth switchAuth={false} {...customProps} />);
    const linkElement = screen.getByTestId('switch-auth');
    expect(linkElement).toBeInTheDocument();
  });
});
