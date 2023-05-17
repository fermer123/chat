import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import {USER_JSON_FILE, port} from './constants/constants';
import {IAuth} from './types/types';
import jwt from 'jsonwebtoken';
const router = express.Router();
const jsonParser = bodyParser.json();

const users: IAuth[] = JSON.parse(fs.readFileSync(USER_JSON_FILE, 'utf8'));
router.get('/', (req: Request, res: Response) => {
  res.json(`nodemone & concurently & port ${port} ${JSON.stringify(users)}`);
});

router.post('/login', jsonParser, async (req: Request, res: Response) => {
  const {email, password} = await req.body;
  console.log(req.body);
  try {
    const user = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (user) {
      const token = jwt.sign({email: user.email}, '');
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    return res.status(500).send(String(error)); //вызову внутреннюю ошибку
  }
});

router.post('/register', jsonParser, async (req: Request, res: Response) => {
  const {email, password} = await req.body;
  try {
    const user = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (user) {
      return res.status(400).json({error: 'Пользователь сущетсвует'}); //вызову не верный запрос
    }
    fs.writeFileSync(USER_JSON_FILE);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
    return res.status(500).send(String(error));
  }
});

export default router;
