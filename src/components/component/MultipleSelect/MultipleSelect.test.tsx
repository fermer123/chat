import renderer from 'react-test-renderer';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MultipleSelect, {IMultipleSelectProps} from './MultipleSelect';

describe('MultipleSelect', () => {
  const selectRoom = jest.fn();
  const customProps: IMultipleSelectProps = {
    selectRoom: 1,
    setSelectRoom: selectRoom,
  };
  afterEach(() => {
    jest.clearAllMocks();
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setup = (props: IMultipleSelectProps) => {
    render(<MultipleSelect {...props} />);
  };
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<MultipleSelect {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
