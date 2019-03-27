import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<Todo> = [];//liste todos

  addTodo(todo){
    this.todos.push(new Todo(todo, false))
    console.log(todo)
  }

  resetTodo(reset){

      this.todos = [];

  }

  constructor() { }

  ngOnInit() {

  }

}
