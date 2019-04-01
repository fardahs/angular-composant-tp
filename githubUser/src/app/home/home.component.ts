import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { PATH_DETAIL } from '../app.routes.constantes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleChange(event){
    this.user = event.target.value;
  }

  navigateToDetail(){
    console.log('login '+ this.user)
    this.router.navigate([PATH_DETAIL, this.user])
  }

}
