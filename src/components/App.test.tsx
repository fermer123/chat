import {render, screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('<App/>', () => {
  test('to match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('to be in', () => {
    render(<App />);
    const element = screen.getByText(/asd/i);
    expect(element).toBeInTheDocument();
  });
});
