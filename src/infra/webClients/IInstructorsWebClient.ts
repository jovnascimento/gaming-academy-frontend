import { Instructor } from "../../domain/models/Instructor";

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
    user: Instructor;
  }> {}

export interface AutenticateResponse extends BaseResponse<Instructor> {}

export interface RegistrationResponse extends BaseResponse<Instructor> {}

export interface IInstructorsWebClient {
  login(email: string, password: string): Promise<LoginResponse>;
  authenticate(token: string): Promise<AutenticateResponse>;
  registration(user: Instructor): Promise<RegistrationResponse>;
}