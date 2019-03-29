import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";
import {ApiServiceService} from "./api-service.service";

@Injectable()
export default class TodoServices{

  todos:Array<Todo> = [new Todo('test')];//liste todos

  constructor(private api:ApiServiceService){}

  getTodo(){
    return this.api.getAllTodo();
  }

  addTodo(todo:string) {
    return this.todos.push(new Todo(todo, false))
    //return this.api.createTodo();
  }

  deleteTodo():Promise<Array<Todo>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos = [])
      }, 1000);
    });
  }

}
