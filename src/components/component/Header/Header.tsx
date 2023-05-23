import {Avatar, Box, Button, Popover} from '@mui/material';
import {FC, memo, useState, useCallback, MouseEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled(Box)`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  background-color: #607d8b;
`;

const AvatarButton = styled(Button)`
  background-color: transparent;
  padding-left: 20px;
`;
const PopoverButton = styled(Button)``;

export interface IHeaderProps {
  user: string;
  setUser: (user: string) => void;
}

const Header: FC<IHeaderProps> = ({user, setUser}) => {
  const push = useNavigate();
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
      <AvatarButton disabled={!user} onClick={popoverHandler}>
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
        <PopoverButton onClick={logOut}>Log out</PopoverButton>
      </Popover>
    </HeaderContainer>
  );
};

export default memo(Header);