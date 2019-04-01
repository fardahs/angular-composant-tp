import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isPrefixNartawakValidator} from "../validators/password.validators";
import {Users} from "../models/Users";

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  user: Users = new Users('Nartawak', 'test');

  constructor(fb: FormBuilder) {
// Création des contrôles
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('', [isPrefixNartawakValidator]);

    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  handleClear() {
    this.user.email = '';
    this.user.password = '';
  }

  handleSubmit() {
    console.log(this.user);
  }

  ngOnInit() {
  }
}
