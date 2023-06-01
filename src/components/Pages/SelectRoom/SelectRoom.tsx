import {Stack, Typography} from '@mui/material';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';
import MultipleSelect from '@src/components/component/MultipleSelect/MultipleSelect';
import PostButton from '@src/components/component/PostButton/PostButton';
import {FC, useMemo, useState} from 'react';
import styled from 'styled-components';

const SelecetRoomContainer = styled(Stack)`
  display: flex;
  padding: 0 1rem;
  height: calc(100% - 84px);
  max-width: 720px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: 1rem;
`;

const SelectRoom: FC = () => {
  const [user] = useLocalStorage('user', 'default');
  const [selectRoom, setSelectRoom] = useState<number>(1);
  const userNameHandler = useMemo(() => {
    const findSymbol = user.split('').findIndex((e) => e === '@');
    const userName = user.slice(0, findSymbol);
    return userName;
  }, [user]);

  const onJoin = () => {
    console.log(selectRoom);
  };

  return (
    <SelecetRoomContainer>
      <Typography variant='h2'>Hello {userNameHandler}</Typography>
      <MultipleSelect selectRoom={selectRoom} setSelectRoom={setSelectRoom} />
      <PostButton
        disabled={!selectRoom}
        label={selectRoom ? `join the ${selectRoom} room` : 'select room'}
        onSubmit={onJoin}
      />
    </SelecetRoomContainer>
  );
};

export default SelectRoom;
