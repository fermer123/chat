import renderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';

import Loading from './Loading';

describe('Loading', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('skeleton elements', () => {
    render(<Loading />);
    const skeletons = screen.getAllByTestId('skeleton');
    expect(skeletons).toHaveLength(4);
    // Проверка размеров элементов Skeleton
    expect(skeletons[0]).toHaveStyle('height: 55px');
    expect(skeletons[1]).toHaveStyle('height: 55px');
    expect(skeletons[2]).toHaveStyle('width: 600px; height: 55px');
    expect(skeletons[3]).toHaveStyle('width: 120px; height: 55px');
  });
});
