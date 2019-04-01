import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ReposComponent } from './repos/repos.component';
import { FollowersComponent } from './followers/followers.component';
import { DetailComponent } from './detail/detail.component';
import {ROUTES} from "./app.routes";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ReposComponent,
    FollowersComponent,
    DetailComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
