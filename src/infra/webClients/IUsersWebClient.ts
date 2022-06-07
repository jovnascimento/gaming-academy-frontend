import { User } from "../../domain/models/User";

export interface BaseResponse<T> {
  status: boolean;
  message: string;
  errors?: {
    [field: string]: string;
  };
  data?: T;
}

export interface LoginResponse
  extends BaseResponse<{
    token: string;
    user: User;
  }> {}

export interface AutenticateResponse extends BaseResponse<User> {}

export interface RegistrationResponse extends BaseResponse<User> {}

export interface IUsersWebClient {
  login(email: string, password: string): Promise<LoginResponse>;
  authenticate(token: string): Promise<AutenticateResponse>;
  registration(user: User): Promise<RegistrationResponse>;
}
