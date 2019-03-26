import { Component, OnInit } from '@angular/core';
import {Formation} from '../model/Formation';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})

export class InterpolateComponent implements OnInit {
  nom:string = 'Bewizyu';
  prenom:string = 'Farda';

  formationAngular:string= 'Module angular';
  formation:Formation = new Formation('Module Angular');

  formationJS:Formation;

  getTitle() :string {
    return `Function: ${this.nom} => ${this.formationAngular} `
  }

  getFullName():string{
    return this.nom + ' ' + this.prenom;
  }

  constructor() { }

  ngOnInit() {
    setTimeout( () => {
      this.formationJS = new Formation('Module Angular');
    }, 3000)
  }

}


