import {Course} from './Course';
import {Todo} from './Todo';

export class Student {
  password: string;
  email: string;
  courses: Course[];
  todos: Todo[];
}
