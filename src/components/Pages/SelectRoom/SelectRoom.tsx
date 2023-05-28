import {Box} from '@mui/material';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';
import {FC} from 'react';
import styled from 'styled-components';

const SelecetRoomContainer = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const SelectRoom: FC = () => {
  const [user] = useLocalStorage('user', 'default');
  return <SelecetRoomContainer>Hello {user}</SelecetRoomContainer>;
};

export default SelectRoom;
