import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  @Input()
  todos:Array<Todo> = [];

  getLength(){

    return this.todos.length == 0 ? "Vous n'avez aucun todo": 'Nombre todos '+ this.todos.length;
  }
  constructor() { }

  ngOnInit() {

  }

}
