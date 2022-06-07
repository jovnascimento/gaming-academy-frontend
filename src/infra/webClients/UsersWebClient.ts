import axios, { Axios } from "axios";
import { injectable } from "inversify";
import { User } from "../../domain/models/User";
import {
  AutenticateResponse,
  IUsersWebClient,
  LoginResponse,
  RegistrationResponse,
} from "./IUsersWebClient";

@injectable()
export class UsersWebClient implements IUsersWebClient {
  baseUrl: string = "http://localhost:3000/api/v1/user/";
  axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await this.axios.post("/me", { email, password });
    return response.data;
  }

  async authenticate(token: string): Promise<AutenticateResponse> {
    const response = await this.axios.get("/authenticate", {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async registration(user: User): Promise<RegistrationResponse> {
    const response = await this.axios.post("/registration", user);
    return response.data;
  }
}
