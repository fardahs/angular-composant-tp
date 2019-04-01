import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  nomCtrl:FormControl;
  prenomCtrl:FormControl;
  telephoneCtrl:FormControl;
  emailCtrl: FormControl;
  skillsCtrl:FormControl;

  userForm: FormGroup;


  constructor(fb:FormBuilder) {
    this.nomCtrl = fb.control('', [Validators.required, Validators.pattern(/[A-Z][a-z0-9_-]/)]);
    this.prenomCtrl = fb.control('',[Validators.required]);
    this.telephoneCtrl = fb.control('',[Validators.pattern(/^[0-9]{10}$/)]);
    this.emailCtrl = fb.control('',[Validators.email, Validators.required]);
    this.skillsCtrl = fb.control('', [Validators.required]);

    this.userForm = fb.group({
      nom:this.nomCtrl,
      prenom:this.prenomCtrl,
      phone:this.telephoneCtrl,
      email:this.emailCtrl,
      skills:this.skillsCtrl
    });

  }

  handleClear()
  {
    this.nomCtrl.setValue('');
    this.prenomCtrl.setValue('');
    this.telephoneCtrl.setValue('');
    this.emailCtrl.setValue('');

  }

  handleSubmit()
  {
    console.log('SUBMIT',this.userForm.value);
  }

  ngOnInit() {
  }

}
