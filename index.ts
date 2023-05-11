import express, {Express, Request, Response} from 'express';
export const port = 3000;
const app: Express = express();
app.get('/', (req: Request, res: Response) => {
  res.send(`nodemone & concurently & port ${port}`);
});

export default app;
