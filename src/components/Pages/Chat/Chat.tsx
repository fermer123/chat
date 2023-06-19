/* eslint-disable @typescript-eslint/no-unsafe-return */
import {FC, useEffect, useState} from 'react';
import {io, Socket} from 'socket.io-client';
import {useLocation} from 'react-router-dom';
import {IMessage} from '@src/types';

const Chat: FC = () => {
  const {search} = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [params, setParams] = useState<Record<string, string> | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [message, setMessage] = useState<IMessage[]>([]);
  const socket: Socket = io('http://localhost:3000/');
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit('join', searchParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      setMessage((e: IMessage[]) => [...e, data]);
    });
  }, [socket]);
  console.log(message);
  return <div>Chat</div>;
};

export default Chat;
