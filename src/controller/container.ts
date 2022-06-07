import { Container } from "inversify";
import { CourseRepository } from "../data/CourseRepository";
import { ICourseRepository } from "../data/ICourseRepository";
import { CoursesWebClient } from "../infra/webClients/CoursesWebClient";
import { ICoursesWebClient } from "../infra/webClients/ICoursesWebClient";
import { IInstructorsWebClient } from "../infra/webClients/IInstructorsWebClient";
import { InstructorsWebClient } from "../infra/webClients/InstructorsWebClient";
import { IUsersWebClient } from "../infra/webClients/IUsersWebClient";
import { UsersWebClient } from "../infra/webClients/UsersWebClient";
import { InjectionTokens } from "./tokens";

let injectionContainer = new Container({
  defaultScope: "Singleton",
  skipBaseClassChecks: true,
});

const createContainer = () => {
  injectionContainer = new Container({
    defaultScope: "Singleton",
    skipBaseClassChecks: true,
  });

  injectionContainer
    .bind<ICoursesWebClient>(InjectionTokens.coursesWebClient)
    .to(CoursesWebClient);
  injectionContainer
    .bind<IUsersWebClient>(InjectionTokens.usersWebClient)
    .to(UsersWebClient);
  injectionContainer
    .bind<IInstructorsWebClient>(InjectionTokens.instructorsWebClient)
    .to(InstructorsWebClient);

  injectionContainer
    .bind<ICourseRepository>(InjectionTokens.courseRepository)
    .to(CourseRepository);
};

export { injectionContainer, createContainer };
