import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/Todo';
import TodoServices from "../services/TodoServices";
import {ApiServiceService} from "../services/api-service.service";


@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  todos:Array<Todo> = [];
  
  constructor(private todoService:TodoServices) { }

  addTodo(todo){
    this.todoService.addTodo(todo);
    console.log(todo);
  }

  resetTodo(reset){
    this.todoService.deleteTodo().then((data) =>{
      this.todos = data;
    })
    console.log(reset);
  }

  ngOnInit() {
      this.todoService.getTodo().then((data:any)=>{
        this.todos = data;
      });

  }

}
