import {FC, memo} from 'react';
import {TextField} from '@mui/material';
import {FieldProps} from 'formik';

export interface IInputFormProps {
  label: string;
  error: string;
  touched: boolean;
}

const InputForm: FC<IInputFormProps & FieldProps> = ({
  label,
  error,
  field, // { name, value, onChange, onBlur }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  touched,
}) => {
  return (
    <TextField
      {...field}
      label={label}
      fullWidth
      error={!!error && !!touched}
      variant='outlined'
      helperText={!!error && !!touched ? error : null}
      data-testid='textField'
    />
  );
};

export default memo(InputForm);
