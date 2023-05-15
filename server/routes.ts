import express, {Request, Response} from 'express';
import {port} from './constants/constants';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json(`nodemone & concurently & port ${port}`);
});

router.get('/api', (req, res) => {
  res.json({bar: 'bar', foo: 'foo'});
});
router.get('/auth', (req, res) => {});

export default router;
