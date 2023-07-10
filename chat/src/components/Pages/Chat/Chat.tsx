/* eslint-disable @typescript-eslint/no-unsafe-return */
import {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {io, Socket} from 'socket.io-client';

import {Avatar, AvatarGroup, Typography} from '@mui/material';
import useInput from '@src/components/component/Hooks/useInput';
import {IMessage} from '@src/types';

import {
  ChatContainer,
  ChatContainerContent,
  ChatContainerHead,
  ChatContentDialog,
  ChatContentMessage,
} from './ChatStyle';

const {default: SnackbarComponent} = await import(
  '@src/components/component/Snackbar/SnackbarComponent'
);

const Chat: FC = () => {
  const {search} = useLocation();
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
  }, []);

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      setMessage((e: IMessage[]) => [...e, data]);
      setUserJoin(data.message);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChatContainer>
      <ChatContainerHead>
        <Typography>Room №{params?.room}</Typography>
        <AvatarGroup max={4}>
          {Array(10)
            .fill('w')
            .map((e) => (
              <Avatar>{e}</Avatar>
            ))}
        </AvatarGroup>
      </ChatContainerHead>
      <ChatContainerContent>
        <ChatContentDialog>
          {message.map((e) => (
            <>
              <div>{e.user}</div>
              <div>{e.message}</div>
            </>
          ))}
        </ChatContentDialog>
        <ChatContentMessage
          value={value}
          label='Введите сообдение'
          onChange={onChange}
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
