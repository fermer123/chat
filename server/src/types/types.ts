type id = string;
type email = string;

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

export interface IUserMessage {
  value: string;
  params: IUrlParam;
}

export interface ChatData {
  roomid: string;
  users: IRoomUser[];
  messages: IUserMessage[];
}

export interface IUserData {
  users: IAuth[];
  rooms: ChatData[];
}

export interface IUrlParam {
  name: string;
  room: string;
}
