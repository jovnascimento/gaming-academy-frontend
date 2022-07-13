import axios, { Axios } from "axios";
import { Course } from "../../domain/models/Course";
import { ICoursesWebClient } from "./ICoursesWebClient";
import { IServerResponse } from "./IServerResponse";

import env from '../../environment'

export class CoursesWebClient implements ICoursesWebClient {
  baseUrl: string = `${env.API_URL}/course/`;
  axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getCourses(): Promise<IServerResponse<Course[]>> {
    const response = await this.axios.get("/getAll");
    return response.data;
  }

  async getCourse(id: string): Promise<IServerResponse<Course>> {
    const response = await this.axios.get(`/getById/${id}`);
    return response.data;
  }

  async createCourse(course: Course): Promise<IServerResponse<Course>> {
    const response = await this.axios.post("/create", course);
    return response.data;
  }

  async updateCourse(course: Course): Promise<IServerResponse<Course>> {
    const response = await this.axios.put(`/update`, course);
    return response.data;
  }

  async deleteCourse(id: string): Promise<IServerResponse<Course>> {
    const response = await this.axios.delete(`/delete/${id}`);
    return response.data;
  }
}
