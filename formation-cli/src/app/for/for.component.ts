import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formations:Array<Formation> = [];

  getColorByElement(isFirst:boolean=false,isLast:boolean=false){
    return isFirst ? 'red' : isLast ? 'green' : 'black';
  }

  getColorByElementBack(isEven:boolean=false){
    return isEven ? 'gray' : 'white';
  }

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular'),
      new Formation('Module JavaScript'),
      new Formation('Module TypeScript'),
    ]
  }

}
