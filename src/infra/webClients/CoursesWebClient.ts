import axios, { Axios } from "axios";
import { injectable } from "inversify";
import { Course } from "../../domain/models/Course";
import { ICoursesWebClient } from "./ICoursesWebClient";

@injectable()
export class CoursesWebClient implements ICoursesWebClient {
  baseUrl: string = 'http://localhost:3000/api/v1/course/';
  axios: Axios

  constructor() {
    this.axios = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async getCourses(): Promise<Course[]> {
    const response = await this.axios.get('/getAll');
    return response.data;
  }

  async getCourse(id: string): Promise<Course> {
    const response = await this.axios.get(`/getById/${id}`);
    return response.data;
  }

  async createCourse(course: Course): Promise<Course> {
    const response = await this.axios.post('/create', course);
    return response.data;
  }

  async updateCourse(course: Course): Promise<Course> {
    const response = await this.axios.put(`/update`, course);
    return response.data;
  }

  async deleteCourse(id: string): Promise<Course> {
    const response = await this.axios.delete(`/delete/${id}`);
    return response.data;
  }

}