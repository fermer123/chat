type id = string;
type email = string;
type messages = Array<string>;

export interface IAuth {
  email: string;
  password: string;
  id: email;
}

export interface IRooms {
  userName: string;
  id?: id;
  selectRoom: string;
  email: email;
  messages: messages;
}

export interface IUserData {
  users: IAuth[];
  rooms: Record<string, IRooms>;
}
