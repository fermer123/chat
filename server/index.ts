import express, {Express, Request, Response} from 'express';
import cors from 'cors';
import {Server} from 'socket.io';
export const port = 3000;
import {createServer} from 'http';
import {HTML_DIR, HTML_FILE} from './constants/constants';
import {data} from './data/data';

const app: Express = express();
const server = createServer(app);
app.use(cors({origin: '*'}));

// app.use(express.static(HTML_DIR));
const io = new Server();

app.get('/', (req: Request, res: Response) => {
  res.json(`nodemone & concurently & port ${port}`);
});

app.get('/api', (req, res) => {
  res.json({bar: 'bar', foo: 'foo'});
});
app.get('/auth', (req, res) => {});

export default app;
