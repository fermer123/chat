import {FC} from 'react';
import style from './Loading.module.scss';

const Loading: FC = () => {
  // better use npm i react-spinners
  return <h1 className={style.loading}>Loading</h1>;
};

export default Loading;
