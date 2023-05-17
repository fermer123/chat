import express, {Request, Response} from 'express';
import {USER_JSON_FILE, port} from './constants/constants';
import bodyParser from 'body-parser';
import fs from 'fs';

const router = express.Router();
const jsonParser = bodyParser.json();

const users = JSON.parse(fs.readFileSync(USER_JSON_FILE, 'utf8'));
router.get('/', (req: Request, res: Response) => {
  res.json(`nodemone & concurently & port ${port} ${JSON.stringify(users)}`);
});

router.post('/login', jsonParser, (req, res) => {
  const {email, password} = req.body;
});

router.post('/register', jsonParser, (req, res) => {
  const {email, password} = req.body;
});

export default router;
