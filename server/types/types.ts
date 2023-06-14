type id = string;
type email = string;
export type messages = Array<string>;

export interface IAuth {
  email: string;
  password: string;
  id: email;
}

export type IRoomUser = {
  userName: string;
  id?: id;
  selectRoom: string;
  email: email;
};

export interface ChatData {
  roomid: string;
  users: IRoomUser[];
  messages: messages;
}

export interface IUserData {
  users: IAuth[];
  rooms: ChatData[];
}

export interface IUrlParam {
  name: string;
  room: string;
}
