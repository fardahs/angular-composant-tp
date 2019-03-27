import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<Todo> = [new Todo('Send a mail', false),
    new Todo('Module angular', false),
    new Todo('module javascript', true),
    new Todo('module typescript', true)
  ];//liste todos

  constructor() { }

  ngOnInit() {

  }

}
