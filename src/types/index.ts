import {NavigateFunction} from 'react-router-dom';

type SetError = (email: string) => void;
type SetUser<T> = (
  value: (T extends string ? string : unknown) | ((val: T) => T),
) => void;

export interface IUserAuthProps<T> {
  email: string;
  password: string;
  setError: SetError;
  setUser: SetUser<T>;
  push: NavigateFunction;
}
export interface IAuthData {
  email: string;
  password: string;
}
