import {Box} from '@mui/material';
import {FC} from 'react';
import styled from 'styled-components';

const SelecetRoomContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const SelectRoom: FC = () => {
  return <SelecetRoomContainer>Hello</SelecetRoomContainer>;
};

export default SelectRoom;
