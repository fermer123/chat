import express, {Express, Request, Response} from 'express';
export const port = 3000;
const app: Express = express();
const mockResponse = {
  foo: 'bar',
  bar: 'foo',
};
app.get('/', (req: Request, res: Response) => {
  res.send(`nodemone & concurently & port ${port}`);
});
app.get('/api', (req, res) => {
  res.send(mockResponse);
});
export default app;
