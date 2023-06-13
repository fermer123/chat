import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import {USERS_JSON_FILE} from './constants/constants';
import {ChatData, IAuth, IRoomUser, IUserData, messages} from './types/types';
import jwt from 'jsonwebtoken';
const router = express.Router();
const jsonParser = bodyParser.json();

let users: IAuth[] = [];
let rooms: Map<string, ChatData> = new Map([]);

if (fs.existsSync(USERS_JSON_FILE)) {
  const userData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedUserData: IUserData = JSON.parse(userData);
  users = parsedUserData.users;
}
if (fs.existsSync(USERS_JSON_FILE)) {
  const roomsData = fs.readFileSync(USERS_JSON_FILE, 'utf8');
  const parsedRoomsData: IUserData = JSON.parse(roomsData);
  if (parsedRoomsData && parsedRoomsData.rooms) {
    rooms = new Map(Object.entries(parsedRoomsData.rooms));
  }
}
router.get('/', (req: Request, res: Response) => {
  res.json(
    `users:  ${JSON.stringify(users)} rooms: ${JSON.stringify(
      Object.fromEntries(rooms),
    )} `,
  );
});

router.get('/room', (req: Request, res: Response) => {
  res.json(`rooms: ${JSON.stringify(Object.fromEntries(rooms))} `);
});

router.post('/room', jsonParser, async (req: Request, res: Response) => {
  const {userName, id, selectRoom, email}: IRoomUser = await req.body;
  try {
    if (!rooms.has(selectRoom)) {
      rooms.set(
        selectRoom,
        new Map([
          [
            'users',
            [
              {
                id,
                userName,
                selectRoom,
                email,
              },
            ],
          ],
          ['messages', []],
        ]),
      );
      console.log(rooms);
      fs.writeFileSync(
        USERS_JSON_FILE,
        JSON.stringify({users: [...users], rooms: Object.fromEntries(rooms)}),
      );
      return res.status(200).json('success');
    }
    return res.status(200).json('success');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send(String(error));
    }
  }
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
      return res.status(200).json({token});
    } else {
      return res.status(400).json('Не верный email или пароль');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    } else {
      return res.status(500).send(String(error));
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
      return res.status(400).json('Email уже используется');
    }
    users.push({email, password, id});
    fs.writeFileSync(
      USERS_JSON_FILE,
      JSON.stringify({rooms: [...rooms], users: [...users]}),
    );
    return res.status(200).json('Success');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
    return res.status(500).send(String(error));
  }
});

export default router;
