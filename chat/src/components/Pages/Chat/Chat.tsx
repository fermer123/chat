/* eslint-disable @typescript-eslint/no-unsafe-return */
import {FC, KeyboardEvent, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {io, Socket} from 'socket.io-client';

import {Avatar, AvatarGroup} from '@mui/material';
import useInput from '@src/components/component/Hooks/useInput';
import useLocalStorage from '@src/components/component/Hooks/useLocalStorage';
import {IMessage} from '@src/types';

import {
  ChatContainer,
  ChatContainerContent,
  ChatContainerHead,
  ChatContentDialog,
  ChatContentMessage,
  RoomName,
} from './ChatStyle';

const {default: SnackbarComponent} = await import(
  '@src/components/component/Snackbar/SnackbarComponent'
);
const {default: Messages} = await import(
  '@src/components/component/Messages/Messages'
);

const Chat: FC = () => {
  const {search} = useLocation();
  const [user] = useLocalStorage('user', 'default');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [params, setParams] = useState<Record<string, string> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {value, setValue, onChange} = useInput();
  const [message, setMessage] = useState<IMessage[]>([]);
  const [userJoin, setUserJoin] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const socket: Socket = io('http://localhost:3000/');

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit('join', searchParams);
    setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      setMessage((e: IMessage[]) => [...e, data]);
      setUserJoin(data.message);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleMessage = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.length) {
      socket.emit('sendMessage', {value, params});
      setValue('');
    }
  };

  return (
    <ChatContainer>
      <ChatContainerHead>
        <RoomName>Room №{params?.room}</RoomName>
        <AvatarGroup max={4}>
          {Array(10)
            .fill('w')
            .map((e, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <Avatar key={idx}>{e}</Avatar>
            ))}
        </AvatarGroup>
      </ChatContainerHead>
      <ChatContainerContent>
        <ChatContentDialog>
          {message.map((e, idx) => (
            <Messages
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              message={e.message}
              user={e.user}
              defineUser={e.user === user}
            />
          ))}
        </ChatContentDialog>
        <ChatContentMessage
          value={value}
          label='Введите сообщение'
          onChange={onChange}
          onKeyDown={handleMessage}
          fullWidth
        />
      </ChatContainerContent>

      <SnackbarComponent
        error={false}
        open={open}
        setOpen={setOpen}
        message={userJoin}
      />
    </ChatContainer>
  );
};

export default Chat;
