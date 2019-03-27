import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  @Input()
  todoList:Array<Todo> = [];

  getLength():number{
    return this.todoList.length;
  }
  constructor() { }

  ngOnInit() {

  }

}
