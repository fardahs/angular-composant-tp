import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  handleClick() {
    console.log('Le boutton a été cliqué');
  }

  isHidden:boolean=true;

  clickButton(){

    this.isHidden = !this.isHidden;

  }

  mouseOver(){
    console.log('mouseover');
  }

  mouseOut(){
    console.log('mouseout');
  }

  constructor() { }

  ngOnInit() {
  }

}
