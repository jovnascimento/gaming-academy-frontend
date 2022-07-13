import { Course } from "../../domain/models/Course";
import { IServerResponse } from "./IServerResponse";

export interface ICoursesWebClient {
  getCourses(): Promise<IServerResponse<Course[]>>;
  getCourse(id: string): Promise<IServerResponse<Course>>;
  createCourse(course: Course): Promise<IServerResponse<Course>>;
  updateCourse(course: Course): Promise<IServerResponse<Course>>;
  deleteCourse(id: string): Promise<IServerResponse<Course>>;
}
