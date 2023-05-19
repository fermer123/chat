export interface IAuth {
  email: string;
  password: string;
  id: number;
}

export interface IUserData {
  users: IAuth[];
}
