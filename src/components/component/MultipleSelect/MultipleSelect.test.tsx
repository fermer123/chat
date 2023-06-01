import renderer from 'react-test-renderer';
import MultipleSelect, {IMultipleSelectProps} from './MultipleSelect';

describe('PostButton', () => {
  const customProps: IMultipleSelectProps = {
    selectRoom: 1,
    setSelectRoom: jest.fn(),
  };
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<MultipleSelect {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
