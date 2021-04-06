import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  content: string[];
  constructor() { }

  ngOnInit() {
    this.content = [];
  }
  // add new todo
  onSubmit() {
    const todo = {
      title: this.title,
      content: this.content,
      completed: false
    };
    this.addTodo.emit(todo);
  }

}

