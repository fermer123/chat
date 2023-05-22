export interface IAuthData {
  email: string;
  password: string;
}

type IResponse = {
  data: string;
  status: number;
};
export interface IErrorDataResponse {
  message: string;
  name: string;
  response: IResponse;
}
