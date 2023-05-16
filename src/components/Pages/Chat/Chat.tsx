import {FC, useEffect} from 'react';
import {io, Socket} from 'socket.io-client';
import {useLocation} from 'react-router-dom';

const Chat: FC = () => {
  const {search} = useLocation();
  const socket: Socket = io('http://localhost:3000/');
  useEffect(() => {
    socket.emit('join');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Chat</div>;
};

export default Chat;
