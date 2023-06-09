import express, {Express} from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';
import router from './routes';
import fs from 'fs';
import {USERS_JSON_FILE} from './constants/constants';
import {IRooms, IUserData} from './types/types';

let rooms: Map<string, IRooms> = new Map([]);

if (fs.existsSync(USERS_JSON_FILE)) {
  const roomsData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedRoomsData: IUserData = JSON.parse(roomsData);
  if (parsedRoomsData && parsedRoomsData.rooms) {
    rooms = new Map<string, IRooms>(Object.entries(parsedRoomsData.rooms));
  }
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
  socket.on('join', (data) => {
    socket.join(data?.room);
    console.log(data);
    rooms.get(data?.room);
    socket.emit('message', {data: {user: {name: 'qwe', message: 'qwe'}}});
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

export default server;
