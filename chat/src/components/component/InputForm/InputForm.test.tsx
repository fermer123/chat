/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import renderer from 'react-test-renderer';

import {render, screen} from '@testing-library/react';

import InputForm, {IInputFormProps} from './InputForm';

const mockFieldProps: any = {
  name: 'test',
  value: '',
  onChange: jest.fn(),
  onBlur: jest.fn(),
};

const mockFormProps: any = {
  values: {},
  setXXXX: jest.fn(),
  handleXXXX: jest.fn(),
  dirty: false,
  isValid: true,
  status: null,
};

const customProps: IInputFormProps = {
  label: 'email',
  error: 'error',
  touched: true,
};

const setup = (props: IInputFormProps) => {
  return render(
    <InputForm
      meta={undefined}
      {...props}
      field={mockFieldProps}
      form={mockFormProps}
    />,
  );
};

describe('InputForm', () => {
  test('toMatchSnapShot', () => {
    const tree = renderer
      .create(
        <InputForm
          field={undefined}
          form={undefined}
          meta={undefined}
          {...customProps}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('display correctly', () => {
    setup({label: 'email', error: '', touched: false});
    const inputElement = screen.getByLabelText('email');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
  });
});
