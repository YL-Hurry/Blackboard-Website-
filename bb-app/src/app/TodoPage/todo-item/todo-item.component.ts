import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/Todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  content: string;
  contentFlag: boolean;
  constructor(private ts: TodoService) { }

  ngOnInit() {
    this.contentFlag = false;
  }
  setClass() {
    const classes = {
      todo: true,
    };
    return classes;
  }

  // change the completed
  onToggle(todo: Todo) {
     todo.completed = !todo.completed;
     this.alike(todo);
     console.log(todo.completed);
    // tslint:disable-next-line:no-shadowed-variable
     this.ts.updateTodo(todo).subscribe(todo => console.log(todo));
  }
  // set alike
  alike(todo: Todo) {
    if (todo.completed) {
      todo.alike += 1;
    } else {
      todo.alike -= 1;
    }
  }
  // delete todo
  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
  // show all content
  showContent() {
      this.contentFlag = !this.contentFlag;
      console.log(this.contentFlag);
  }
  // delete one content
  onDeleteContent(content: string) {
    for (let location = 0; location < this.todo.content.length; location++) {
      if ( content === this.todo.content[location]) {
        console.log('location:' + location);
        this.todo.content.splice(location, 1);
        this.ts.updateTodo(this.todo).subscribe();
        console.log('After delete');
        return;
      }
    }
  }
  // add new content in todo
  onSubmit() {
    console.log(this.content);
    // @ts-ignore
    if (this.content === undefined || this.content === []) {alert('commit is empty'); return; }
    this.todo.content.push(this.content);
    this.ts.updateTodo(this.todo).subscribe();
  }
}
