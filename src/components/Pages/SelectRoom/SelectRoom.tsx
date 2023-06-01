import {Stack} from '@mui/material';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';
import MultipleSelect from '@src/components/component/MultipleSelect/MultipleSelect';
import {FC, useMemo, useState} from 'react';
import styled from 'styled-components';

const SelecetRoomContainer = styled(Stack)`
  display: flex;
  height: calc(100% - 84px);
  max-width: 720px;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 1rem;
`;

const SelectRoom: FC = () => {
  const [user] = useLocalStorage('user', 'default');
  const [selectRoom, setSelectRoom] = useState<number>();
  const userNameHandler = useMemo(() => {
    const findSymbol = user.split('').findIndex((e) => e === '@');
    const userName = user.slice(0, findSymbol);
    return userName;
  }, [user]);

  return (
    <SelecetRoomContainer>
      <span>Hello {userNameHandler}</span>
      <span>Выберет комнату</span>
      <MultipleSelect selectRoom={selectRoom} setSelectRoom={setSelectRoom} />
    </SelecetRoomContainer>
  );
};

export default SelectRoom;
