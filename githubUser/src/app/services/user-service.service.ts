import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


//const API_BASE_URL: string = 'https://api.punkapi.com/v2/';
const API_BASE_URL: string = 'https://api.github.com/users/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUser(login:string){

    return this.http.get(`${API_BASE_URL}${login}`).toPromise();
    
  }
}
