import {Avatar, Box} from '@mui/material';
import {FC} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled(Box)`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
`;

interface IHeader {
  user: string;
}

const Header: FC<IHeader> = ({user}) => {
  console.log(user);
  return (
    <HeaderContainer>
      <Avatar sx={{bgcolor: '#2196f3'}}>{[...user].at(0)}</Avatar>
    </HeaderContainer>
  );
};

export default Header;
