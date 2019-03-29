import { Component, OnInit } from '@angular/core';
import {Formations} from "../model/Formations";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormationsResolvers} from "../resolvers/FormationsResolvers";

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  formations:Array<Formations>;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => this.formations =  data['formations']);
/*

    this.formations = [
      new Formations(1,'angular'),
      new Formations(2,'typescript')
    ]
*/

    this.route.paramMap.subscribe((params:ParamMap) => {
      console.log('isFormation', params.get('idFormation'));
    });


  }



}
