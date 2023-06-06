import express, {Express} from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
import {createServer} from 'http';
import router from './routes';

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
  socket.on('join', ({name, room}) => {
    socket.join(room);
  });
  socket.emit('message', {
    data: {user: {name: 'qwe', message: 'qwe'}},
  });
  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

export default server;
