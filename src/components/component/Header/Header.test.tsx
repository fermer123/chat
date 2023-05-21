import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import Header, {IHeaderProps} from './Header';

describe('Header', () => {
  const customProps: IHeaderProps = {
    user: 'qwe@mail.ru',
  };
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<Header {...customProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to be in the document', () => {
    render(<Header {...customProps} />);
    const avatarElement = screen.getByText('q');
    expect(avatarElement).toBeInTheDocument();
  });
});
