import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';
import {Observable} from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  todoUrl = 'http://localhost:8080/todos/';
  constructor(private http: HttpClient) { }

  // get all todo
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl);
  }
  // get one todo by id
  getTodoById(id): Observable<Todo> {
    const url = `${this.todoUrl}${id}`;
    return this.http.get<Todo>(url);
  }
  // update todo
  updateTodo(todo: Todo): Observable<any> {
    console.log(todo.completed);
    const url = `${this.todoUrl}${todo._id}`;
    return this.http.put(url, todo, httpOptions);
  }
  // delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todoUrl}${todo._id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
  // add todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todoUrl, todo, httpOptions);
  }
}
