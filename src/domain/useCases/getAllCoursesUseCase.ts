import { inject } from "inversify";
import { InjectionTokens } from "../../controller/tokens";
import { CourseRepository } from "../../data/CourseRepository";
import { Course } from "../models/Course";
import { GenericUseCase } from "./GenericUseCase";

export class GetAllCoursesUseCase implements GenericUseCase<Course[], void> {
  constructor(
    @inject(InjectionTokens.courseRepository)
    private readonly courseRepository: CourseRepository
  ) {}

  async execute(): Promise<Course[]> {
    return this.courseRepository.getCourses();
  }
}
