import {FC, useEffect, useState} from 'react';
import {io, Socket} from 'socket.io-client';
import {useLocation} from 'react-router-dom';

const Chat: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {search} = useLocation();
  const [params, setParams] = useState<Record<string, string> | null>(null);

  const socket: Socket = io('http://localhost:3000/');
  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit('join', params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    socket.on('message', ({data}) => {
      console.log(data);
    });
  }, [socket]);

  return <div>Chat</div>;
};

export default Chat;
