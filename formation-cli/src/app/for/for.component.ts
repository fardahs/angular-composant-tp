import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formations:Array<Formation> = [];

  getColorByElementRed(isFirst:boolean=false):boolean{
    return isFirst ? true : false;
  }

  getColorByElementGreen(isLast:boolean=false):boolean{
    return isLast ? true : false;
  }

  getColorByElementBack(isEven:boolean=false):boolean{
    return isEven ? true : false;
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
