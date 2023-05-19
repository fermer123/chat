import {FC, memo} from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

interface IPostButtonProps {
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
      endIcon={<SendIcon />}>
      {label}
    </Button>
  );
};

export default memo(PostButton);
