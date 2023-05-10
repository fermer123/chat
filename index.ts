import express, {Express, Request, Response} from 'express';
const port = 3000;
const app: Express = express();
app.get('/', (req: Request, res: Response) => {
  res.send(`nodemone & concurently & port ${port}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
