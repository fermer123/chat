import express, {Express} from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';
import router from './routes';
import fs from 'fs';
import {USERS_JSON_FILE} from './constants/constants';
import {ChatData, IUserData, IUrlParam} from './types/types';

let rooms: ChatData[] = [];

if (fs.existsSync(USERS_JSON_FILE)) {
  const roomsData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedRoomsData: IUserData = JSON.parse(roomsData);
  rooms = parsedRoomsData.rooms;
}

const app: Express = express();
app.use(cors({origin: '*'}));
app.use(router);
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('connection');
  socket.on('join', (data: IUrlParam) => {
    socket.join(data?.room);
    const room = rooms.find((e) => e.roomid === data?.room);
    room.users.map((e) => (e.id = socket.id));
    socket.emit('message', {data: {user: {name: socket.id, message: 'qwe'}}});
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

export default server;
