import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/Formation";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  formations:Array<Formation> = [new Formation('Module Angular','angular 6', 12.0)];

  handleFormationSelected(formation) {
    console.log('Formation selected', formation);
    alert(formation.nom);
  }
  constructor() { }

  ngOnInit() {

  }

}
