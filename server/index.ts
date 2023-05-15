import express, {Express, Request, Response} from 'express';
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
  },
});

export default app;
