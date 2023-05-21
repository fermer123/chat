import {Avatar, Box} from '@mui/material';
import {FC} from 'react';
import styled from 'styled-components';

const HeaderContainer = styled(Box)`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  justify-content: flex-end;
  background-color: gray;
`;

export interface IHeaderProps {
  user: string;
}

const Header: FC<IHeaderProps> = ({user}) => {
  console.log(user);
  return (
    <HeaderContainer>
      <Avatar sx={{bgcolor: '#2196f3'}}>{[...user].at(0)}</Avatar>
    </HeaderContainer>
  );
};

export default Header;
