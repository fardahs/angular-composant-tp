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

  userdata:Array<Object[]> = [];
  params:any;
  headers:any;

  constructor(private github:GithubApiService, private param:ParamsServiceService,
              private interceptor:SampleHeadersInterceptorService,
              private  header:HeaderServiceService, private error:SamplesErrorInterceptorServiceService ){}

  ngOnInit(): void{
    
    this.github.getUser('beers/1').then( (resp:any) =>{
      this.userdata = resp;
      console.log(this.userdata[0]);
    });

    //this.params=this.param.sampleParams();
    //this.headers=this.header.sampleParams();
  }
  

  }


