import { Course } from "./Course";

export interface User {
  _id?: string;
  created_at?: Date;
  updated_at?: Date;
  name: string;
  email: string;
  password: string;

  courses?: Course[];
}
