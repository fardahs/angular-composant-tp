import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {resolve} from "url";

const API_BASE_URL:string = 'https://api.punkapi.com/v2/beers/1/';
const API_USERS:string='users/';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { }

  getUser(url?:string){
    //return this.http.get(`${API_BASE_URL}${API_USERS}${login}`).toPromise();
    return this.http.get(`${API_BASE_URL}`).toPromise().then(
      res => {
        console.log(res);
      }
    );
  }

}
