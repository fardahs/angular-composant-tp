import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TemplateComponent } from './template/template.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ValidatorsComponent } from './validators/validators.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    TwoWayBindingComponent,
    TypescriptComponent,
    ValidatorsComponent,
    StyleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
