import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
  formations:Array<Formation> = [];

  constructor() { }

  ngOnInit() {
    this.formations = [
      new Formation('Module Angular','angular 6', 12.0,'November 14, 2019','November 24, 2019' ),
      new Formation('Module JavaScript', 'js',54,'November 14, 2019','November 24, 2019'),
      new Formation('Module TypeScript', 'ts', 56,'November 14, 2019','November 24, 2019'),
    ]
  }

}
