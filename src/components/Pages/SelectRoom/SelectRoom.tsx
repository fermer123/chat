import {Box} from '@mui/material';
import {FC} from 'react';
import styled from 'styled-components';

const SelecetRoomContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

interface ISelectRoomProps {
  user: string;
}

const SelectRoom: FC<ISelectRoomProps> = ({user}) => {
  return <SelecetRoomContainer>Hello {user}</SelecetRoomContainer>;
};

export default SelectRoom;
