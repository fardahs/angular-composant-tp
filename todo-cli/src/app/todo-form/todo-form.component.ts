import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from "../model/Todo";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title:string = '';

  @Output()
  todoForm:EventEmitter<string> = new EventEmitter<string>();
  @Output()
  todoDelete:EventEmitter<Todo> = new EventEmitter<Todo>();

  handleChange(event){
    this.title = event.target.value;
  }

  dataByForm() {
    this.todoForm.emit(this.title);
    console.log(this.title);
  }

  onClickRest(){
    this.todoDelete.emit(new Todo(this.title, false))
  }

  constructor() { }

  ngOnInit() {
  }

}
