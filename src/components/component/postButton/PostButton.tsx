import {FC, memo} from 'react';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

interface IPostButtonProps {
  disabled: boolean;
  onSubmit: () => void;
}

const PostButton: FC<IPostButtonProps> = ({disabled, onSubmit}) => {
  return (
    <Button
      data-testid='postData'
      type='submit'
      onClick={onSubmit}
      disabled={disabled}
      variant='outlined'
      endIcon={<SendIcon />}>
      Войти
    </Button>
  );
};

export default memo(PostButton);
