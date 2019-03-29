import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeaderServiceService {

  constructor(private http: HttpClient) { }
  sampleParams() {
    const headers = new HttpHeaders()
      .set('content-Type', 'application/json');

    this.http.get(`http://sample.com`, {headers})
      .subscribe((head) => {console.log(head)});

  }
}
