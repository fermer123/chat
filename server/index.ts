import express, {Express, Request, Response} from 'express';
import cors from 'cors';

export const port = 3000;

const app: Express = express();

const mockResponse = {
  foo: 'foo',
  bar: 'bar',
};

app.use(cors({origin: '*'}));
app.get('/', (req: Request, res: Response) => {
  res.send(`nodemone & concurently & port ${port}`);
});
app.get('/api', (req, res) => {
  res.json(mockResponse);
});
export default app;
