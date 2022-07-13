import axios, { Axios } from "axios";
import { User } from "../../domain/models/User";
import {
  AutenticateResponse,
  IUsersWebClient,
  LoginResponse,
  RegistrationResponse,
} from "./IUsersWebClient";

import env from '../../environment'

export class UsersWebClient implements IUsersWebClient {
  baseUrl: string = `${env.API_URL}/user/`;
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
    const response = await this.axios.post("/login", { email, password });
    return response.data;
  }

  async authenticate(token: string): Promise<AutenticateResponse> {
    const response = await this.axios.get("/me", {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  }

  async registration(user: Partial<User>): Promise<RegistrationResponse> {
    const response = await this.axios.post("/registration", user);
    return response.data;
  }
}
