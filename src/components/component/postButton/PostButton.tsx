import {FC, memo} from 'react';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';

export interface IPostButtonProps {
  disabled: boolean;
  onSubmit: () => void;
  label: string;
}

const PostButton: FC<IPostButtonProps> = ({disabled, onSubmit, label}) => {
  return (
    <Button
      data-testid='postData'
      type='submit'
      onClick={onSubmit}
      disabled={disabled}
      variant='outlined'
      fullWidth
      endIcon={<LoginIcon />}>
      {label}
    </Button>
  );
};

export default memo(PostButton);
