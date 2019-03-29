import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Formations} from "../model/Formations";


@Injectable()
export class FormationsResolvers implements Resolve<Formations[]> {
  constructor() {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return [{
      id:1,
      title: 'Module Angular',
      decription: '',
    }, {
      id:2,
      title: 'Module JavaScript',
      decription: '',
    }, {
      id:3,
      title: 'Module TypeScript',
      decription: '',
    }];
  }
}
