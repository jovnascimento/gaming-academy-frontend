import axios, { Axios } from "axios";
import { Instructor } from "../../domain/models/Instructor";
import {
  IInstructorsWebClient,
  LoginResponse,
  AutenticateResponse,
  RegistrationResponse,
} from "./IInstructorsWebClient";

export class InstructorsWebClient implements IInstructorsWebClient {
  baseUrl: string = `${process.env.REACT_APP_API_URL}/instructor/`;
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

  async registration(user: Instructor): Promise<RegistrationResponse> {
    const response = await this.axios.post("/registration", user);
    return response.data;
  }
}
