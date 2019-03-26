import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isDisplay:boolean=true;
  isClick:boolean=true;
  formation:Formation = new Formation('Module Angular', 'description');

  onclick(){
    this.isClick = !this.isClick;
  }

  constructor() { }

  ngOnInit() {
    setInterval( ()=> {
      this.isDisplay = !this.isDisplay;
    },2000)
  }

}
