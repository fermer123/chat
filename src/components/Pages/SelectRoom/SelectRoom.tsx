import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import {Stack, Typography} from '@mui/material';
import joinRoom from '@src/components/api/joinRoom';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';
// import MultipleSelect from '@src/components/component/MultipleSelect/MultipleSelect';
import PostButton from '@src/components/component/PostButton/PostButton';

type MultipleSelectComponentProps = {
  selectRoom: string;
  setSelectRoom: Dispatch<SetStateAction<string>>;
};

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
  const [MultipleSelectComponent, setMultipleSelectComponent] =
    useState<FC<MultipleSelectComponentProps> | null>(null);

  useEffect(() => {
    const loadMultipleSelect = async () => {
      const {default: MultipleSelect} = await import(
        '@src/components/component/MultipleSelect/MultipleSelect'
      );
      setMultipleSelectComponent(() => MultipleSelect);
    };
    loadMultipleSelect();
  }, []);

  const userNameHandler = useMemo(() => {
    const findSymbol = user.split('').findIndex((e) => e === '@');
    const userName = user.slice(0, findSymbol);
    return userName;
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
      {MultipleSelectComponent && (
        <MultipleSelectComponent
          selectRoom={selectRoom}
          setSelectRoom={setSelectRoom}
        />
      )}
      <PostButton
        disabled={!selectRoom}
        label={selectRoom ? `join the ${selectRoom} room` : 'select room'}
        onSubmit={onJoin}
      />
    </SelecetRoomContainer>
  );
};

export default SelectRoom;
