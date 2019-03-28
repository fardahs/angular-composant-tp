import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ParamsServiceService {

  constructor(private http: HttpClient) { }

  sampleParams() {
    const params = new HttpParams()
      .set('login', 'nartwark');

    this.http.get(`http://sample.com`, {params})
      .subscribe(() => {});

  }
}
