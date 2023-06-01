import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {Dispatch, FC, SetStateAction, memo, useCallback} from 'react';
import MuiAlert from '@mui/material/Alert';

interface ISnackbarComponentProps {
  message: string;
  error: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SnackbarComponent: FC<ISnackbarComponentProps> = ({
  open,
  setOpen,
  message,
  error,
}) => {
  // const [open, setOpen] = useState<boolean>(false);

  const handleClose = useCallback(
    (event: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    },
    [setOpen],
  );

  const action = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleClose}>
      <CloseIcon fontSize='small' />
    </IconButton>
  );

  return (
    <div>
      <Snackbar open={open} autoHideDuration={5000} action={action}>
        <MuiAlert severity={error ? 'error' : 'success'} sx={{width: '100%'}}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default memo(SnackbarComponent);
