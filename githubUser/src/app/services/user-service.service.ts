import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

const API_BASE_URL: string = 'https://api.punkapi.com/v2/';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUser(login:string){

    return this.http.get(`${API_BASE_URL}${login}`).toPromise();
    
  }
}
