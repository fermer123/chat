import {FC, memo, MouseEvent, useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {Avatar, Button, Popover, Typography} from '@mui/material';

import useLocalStorage from '../Hooks/useLocalStorage';

const {AvatarButton, HeaderContainer, PopoverList} = await import(
  './HeadStyle'
);

const Header: FC = () => {
  const push = useNavigate();
  const [user, setUser] = useLocalStorage('user', 'default');
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);

  const popoverHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setOpen(e.currentTarget);
    },
    [setOpen],
  );

  const handleClose = useCallback(() => {
    setOpen(null);
  }, [setOpen]);

  const logOut = useCallback(() => {
    setUser('');
    localStorage.removeItem('user');
    push('/');
  }, [push, setUser]);

  return (
    <HeaderContainer>
      <AvatarButton
        data-testid='AvatarButton'
        disabled={!user}
        onClick={popoverHandler}>
        <Avatar sx={{bgcolor: '#2196f3'}}>{[...user].at(0)}</Avatar>
      </AvatarButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}>
        <PopoverList data-testid='popover'>
          <Typography>{user}</Typography>
          <Button onClick={logOut}>Log out</Button>
        </PopoverList>
      </Popover>
    </HeaderContainer>
  );
};

export default memo(Header);
