import {FC, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {Stack, Typography} from '@mui/material';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';

const {default: getUserNameFromEmail} = await import(
  '@src/components/api/getUserNameFromEmail'
);
const {default: joinRoom} = await import('@src/components/api/joinRoom');
const {default: MultipleSelect} = await import(
  '@src/components/component/MultipleSelect/MultipleSelect'
);
const {default: PostButton} = await import(
  '@src/components/component/PostButton/PostButton'
);

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
  const push = useNavigate();
  const [user] = useLocalStorage('user', 'default');
  const [selectRoom, setSelectRoom] = useState<string>('1');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>('');

  const userNameHandler = useMemo(() => {
    return getUserNameFromEmail(user);
  }, [user]);

  const onJoin = () => {
    joinRoom({
      email: user,
      push,
      selectRoom,
      userName: userNameHandler,
      setError,
    });
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
