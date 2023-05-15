import {FC, memo} from 'react';
import {TextField} from '@mui/material';
import {FieldProps} from 'formik';
import style from './InputForm.module.scss';

interface IInputFormProps {
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
      className={style.input_form}
      fullWidth
      error={!!error && !!touched}
      variant='outlined'
      helperText={!!error && !!touched ? error : null}
    />
  );
};

export default memo(InputForm);
