import express, {Express} from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';
import router from './routes';
import fs from 'fs';
import {USERS_JSON_FILE} from './constants/constants';
import {ChatData, IUserData, IUrlParam, IAuth} from './types/types';

let users: IAuth[] = [];
let rooms: ChatData[] = [];

if (fs.existsSync(USERS_JSON_FILE)) {
  const userData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedUserData: IUserData = JSON.parse(userData);
  users = parsedUserData.users;
}
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
  socket.on('join', ({name, room}: IUrlParam) => {
    socket.join(room);
    const selectRoom = rooms.find((e) => e.roomid === room);
    if (fs.existsSync(USERS_JSON_FILE)) {
      const roomsData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
      const parsedRoomsData: IUserData = JSON.parse(roomsData);
      rooms = parsedRoomsData.rooms;
      if (selectRoom) {
        selectRoom.users.map((e) => (e.id = socket.id));
        fs.writeFileSync(
          USERS_JSON_FILE,
          JSON.stringify({users: [...users], rooms: [...rooms]}),
        );
      }
    }
    socket.broadcast.emit('message', {
      user: name,
      message: `${name} connected`,
    });
  });

  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

export default server;
