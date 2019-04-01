import { Component, OnInit } from '@angular/core';
import {Users} from "../models/Users";

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  user: Users = new Users('Nartawak', 'test');

  constructor() { }

  ngOnInit() {
  }
  handleSubmit(){
    console.log('SUBMIT', this.user);
  }
}
