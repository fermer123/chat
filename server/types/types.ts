export interface IAuth {
  email: string;
  password: string;
  id: string;
}

export interface IUserData {
  users: IAuth[];
}
