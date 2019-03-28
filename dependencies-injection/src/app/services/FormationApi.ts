import {Formation} from "../model/Formation";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export default class FormationApi{
  fetchFormation():Promise<Array<Formation>>{
    return new Promise((resolve) => {
      setTimeout(() =>{
        resolve([
          new Formation('Module Angular'),
          new Formation('Module JavaScript'),
          new Formation('Module TypeScript'),
        ])
      }, 2000);
    });
  }
}
