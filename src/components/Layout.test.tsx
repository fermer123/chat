import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';

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
  // eslint-disable-next-line jest/no-commented-out-tests
  // test('expect header when location is not "/"', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/room']}>
  //       <Layout />
  //     </MemoryRouter>,
  //   );
  //   expect(screen.getByTestId('AvatarButton')).toBeInTheDocument();
  // });
  test('expect header not to be in document when location is "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Layout />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId('AvatarButton')).not.toBeInTheDocument();
  });
});
