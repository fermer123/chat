/* eslint-disable @typescript-eslint/no-unsafe-return */
import {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {io, Socket} from 'socket.io-client';
import styled from 'styled-components';

import {Box} from '@mui/material';
import SnackbarComponent from '@src/components/component/Snackbar/SnackbarComponent';
import {IMessage} from '@src/types';

const ChatContainer = styled(Box)`
  background-color: #286659;
  height: calc(100% - 84px);
  padding: 1rem 1rem;
`;

const Chat: FC = () => {
  const {search} = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [params, setParams] = useState<Record<string, string> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <div>
        head
        <div>room name</div>
        <div>users connected</div>
        <div>leave room</div>
      </div>
      <div>
        {message.map((e) => (
          <>
            <div>{e.user}</div>
            <div>{e.message}</div>
          </>
        ))}
      </div>
      <div>footer send message</div>
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
