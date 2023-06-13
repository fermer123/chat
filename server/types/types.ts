type id = string;
type email = string;
export type messages = Array<string>;

export interface IAuth {
  email: string;
  password: string;
  id: email;
}

export interface IRoomUser {
  userName: string;
  id?: id;
  selectRoom: string;
  email: email;
}

export type ChatData = Map<string, IRoomUser[] | messages>;

export interface IUserData {
  users: IAuth[];
  rooms: Record<string, ChatData>;
}
