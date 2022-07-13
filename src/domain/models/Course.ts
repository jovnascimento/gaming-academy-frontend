import { Instructor } from "./Instructor";
import { Lection } from "./Lection";

export interface Course {
  _id?: string;
  created_at?: Date;
  updated_at?: Date;
  instructor?: Instructor | string;
  name: string;
  description: string;
  image: string;
  duration: number;

  lections?: Lection[];
}
