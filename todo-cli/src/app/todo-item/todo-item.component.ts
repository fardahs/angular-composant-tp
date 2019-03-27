import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo:Todo;

  constructor() { }

  handleCheckBoxChange(){
    this.todo.isDone = !this.todo.isDone;
  }
  handleClick() {
    console.log("TODO", this.todo);
  }

  ngOnInit() {
  }

}
