import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import {USERS_JSON_FILE} from './constants/constants';
import {IAuth, IUserData} from './types/types';
import jwt from 'jsonwebtoken';
const router = express.Router();
const jsonParser = bodyParser.json();

// const userData: IUserData = JSON.parse(
//   fs.readFileSync(USERS_JSON_FILE, 'utf8'),
// );
// const users: IAuth[] = userData?.users;
let users: IAuth[] = [];

if (fs.existsSync(USERS_JSON_FILE)) {
  const userData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedUserData: IUserData = JSON.parse(userData);
  users = parsedUserData.users;
}

router.get('/', (req: Request, res: Response) => {
  res.json(
    `nodemone & concurently & port ${USERS_JSON_FILE} ${JSON.stringify(users)}`,
  );
});

router.post('/login', jsonParser, async (req: Request, res: Response) => {
  const {email, password, id}: IAuth = await req.body;
  try {
    const user = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (user) {
      const token = jwt.sign(
        {email: user.email, password: user.password},
        `${id}`,
      );
      console.log({token});
      res.json({token});
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return res.status(500).send(error.message);
    } else {
      console.log(error);
      return res.status(500).send(String(error)); //вызову внутреннюю ошибку
    }
  }
});

router.post('/register', jsonParser, async (req: Request, res: Response) => {
  const {email, password, id}: IAuth = await req.body;
  try {
    const user = users.find(
      (e) => e.email === email && e.password === password,
    );
    if (user) {
      return res.status(400).json({error: 'Пользователь сущетсвует'}); //вызову не верный запрос
    }
    users.push({email, password, id});
    fs.writeFileSync(USERS_JSON_FILE, JSON.stringify({users}));
    return res.status(200).send('success');
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    return res.status(500).send(String(error));
  }
});

export default router;
