import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../service/todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  content: string[];
  constructor(
    private ts: TodoService) { }

  ngOnInit() {
    this.ts.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
  getFavorite(c: string[]) {
    if (c !== undefined) {
      // @ts-ignore
      for (const i of c) {}
    }
  }
  // delete
  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t._id !== todo._id);
    this.ts.deleteTodo(todo).subscribe();
    console.log('dddddddddddd');
  }
  addTodo(todo: Todo) {
    // tslint:disable-next-line:no-shadowed-variable
    this.ts.addTodo(todo).subscribe(todo => this.todos.push(todo));
  }
}
