import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import LoadingRoom from './LoadingRoom';

describe('LoadingRoom', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<LoadingRoom />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('skeleton elements', () => {
    render(<LoadingRoom />);
    const skeletons = screen.getAllByTestId('skeleton');
    expect(skeletons).toHaveLength(3);
    // Проверка размеров элементов Skeleton
    expect(skeletons[0]).toHaveStyle('width: 310px; height: 72px');
    expect(skeletons[1]).toHaveStyle('height: 55px');
    expect(skeletons[2]).toHaveStyle('height: 55px');
  });
});
