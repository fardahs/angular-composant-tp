import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";


const API_BASE_URL:string = 'http://localhost:3000/todos';
const API_TITLE:string='';
const API_ISDONE:boolean=false;

@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getAllTodo(){
    return this.http.get(`${API_BASE_URL}`).toPromise();
  }

  createTodo(){
    const params = new HttpParams()
      .set('${API_TITLE}', '${API_ISDONE}');

    this.http.get(`${API_BASE_URL}`, {params}).toPromise();

  }

}
