import { Course } from "../../domain/models/Course";

export interface ICoursesWebClient {
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course>;
  createCourse(course: Course): Promise<Course>;
  updateCourse(course: Course): Promise<Course>;
  deleteCourse(id: string): Promise<Course>;
}