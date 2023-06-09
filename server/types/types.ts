type id = string;
type email = string;

export interface IAuth {
  email: string;
  password: string;
  id: email;
}

type User = {
  id: string;
  userName: string;
  selectRoom: string;
  email: string;
};

export interface IRooms {
  userName: string;
  id?: id;
  selectRoom: string;
  email: email;
}

export interface IUserData {
  users: IAuth[];
  rooms: Record<string, IRooms>;
}
