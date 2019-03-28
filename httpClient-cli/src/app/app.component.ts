import { Component } from '@angular/core';
import {GithubApiService} from "./services/github-api.service";
import {ParamsServiceService} from "./services/params-service.service";
import {SampleHeadersInterceptorService} from "./services/sample-headers-interceptor.service";
import {HeaderServiceService} from "./services/header-service.service";
import {SamplesErrorInterceptorServiceService} from "./services/samples-error-interceptor-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpClient-cli';

  constructor(private github:GithubApiService, private param:ParamsServiceService,
              private interceptor:SampleHeadersInterceptorService,
              private  headers:HeaderServiceService, private error:SamplesErrorInterceptorServiceService ){}

  user(){
    this.github.getUser('https://api.punkapi.com/v2/beers/1/');
  }

}
