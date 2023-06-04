import {NavigateFunction} from 'react-router-dom';

type email = string;
type id = string;
type SetError = (email: email) => void;
type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;

export interface IUserJoinRoom {
  setError: SetError;
  selectRoom: number;
  userName: string;
  email: email;
  push: NavigateFunction;
}

export interface IUserAuthProps<T> {
  email: email;
  password: string;
  setError: SetError;
  setUser: SetUser<T>;
  push: NavigateFunction;
}
export interface IAuthData {
  email: email;
  password: string;
}
