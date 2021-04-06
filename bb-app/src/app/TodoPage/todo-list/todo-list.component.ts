import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../service/todo.service';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../../models/Student';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  student: Student;
   constructor(
     private ts: TodoService,
     private ss: StudentService,
     private route: ActivatedRoute) { }

  ngOnInit() {
     // get all todos from backend
    this.ts.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  // delete todo both fontend and backend
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t._id !== todo._id);
    this.ts.deleteTodo(todo).subscribe();
    console.log('dddddddddddd');
  }
  // add new todo both fontend and backend
  addTodo(todo: Todo) {
    // tslint:disable-next-line:no-shadowed-variable
    this.ts.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }
}
