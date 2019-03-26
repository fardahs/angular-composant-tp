import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { BindingComponent } from './binding/binding.component';
import {FormsModule} from "@angular/forms";
import { EvenementComponent } from './evenement/evenement.component';
import { VariableComponent } from './variable/variable.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { ForComponent } from './for/for.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    BindingComponent,
    EvenementComponent,
    VariableComponent,
    NgIfComponent,
    ForComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
