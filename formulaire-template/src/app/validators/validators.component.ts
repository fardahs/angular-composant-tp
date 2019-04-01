import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb:FormBuilder) {
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('');

    this.userForm = fb.group({
      email:this.emailCtrl,
      password:this.passwordCtrl
    });
  }

  handleClear()
  {
    this.emailCtrl.setValue("");
    this.passwordCtrl.setValue("");
  }

  handleSubmit()
  {
    console.log('SUBMIT',this.userForm.value)
  }

  ngOnInit() {
  }
}
