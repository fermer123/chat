import renderer from 'react-test-renderer';
import SnackbarComponent, {ISnackbarComponentProps} from './SnackbarComponent';

describe('PostButton', () => {
  const customProps: ISnackbarComponentProps = {
    message: 'test',
    error: false,
    open: true,
    setOpen: jest.fn(),
  };
  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(<SnackbarComponent {...customProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
