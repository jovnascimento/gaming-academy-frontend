import { inject, injectable } from "inversify";
import { InjectionTokens } from "../controller/tokens";
import { Course } from "../domain/models/Course";
import { ICoursesWebClient } from "../infra/webClients/ICoursesWebClient";
import { ICourseRepository } from "./ICourseRepository";

@injectable()
export class CourseRepository implements ICourseRepository {
  constructor(
    @inject(InjectionTokens.coursesWebClient)
    private coursesWebClient: ICoursesWebClient
  ) {}

  async getCourses(): Promise<Course[]> {
    return await this.coursesWebClient.getCourses();
  }

  async getCourse(id: string): Promise<Course> {
    return await this.coursesWebClient.getCourse(id);
  }

  async createCourse(course: Course): Promise<Course> {
    return await this.coursesWebClient.createCourse(course);
  }

  async updateCourse(course: Course): Promise<Course> {
    return await this.coursesWebClient.updateCourse(course);
  }

  async deleteCourse(id: string): Promise<Course> {
    return await this.coursesWebClient.deleteCourse(id);
  }
}
