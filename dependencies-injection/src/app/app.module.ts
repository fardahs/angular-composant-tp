import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import FormationService from "./services/FormationService";
import FormationApi from "./services/FormationApi";

@NgModule({
  declarations: [
    AppComponent,
    FormationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FormationService,
    FormationApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
