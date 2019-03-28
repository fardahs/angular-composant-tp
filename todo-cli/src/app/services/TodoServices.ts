import {Injectable} from "@angular/core";
import {Todo} from "../model/Todo";

@Injectable()
export default class TodoServices{

  todos:Array<Todo> = [new Todo('test')];//liste todos

  constructor(){}

  getTodo():Promise<Array<Todo>>{
    return new Promise((resolve) => {
      setTimeout(() =>{
        resolve(this.todos)
      }, 1000);
    });
  }

  addTodo(todo:string) {
    return this.todos.push(new Todo(todo, false))
  }

  deleteTodo():Promise<Array<Todo>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.todos = [])
      }, 1000);
    });
  }
}
