import { Component, OnInit } from '@angular/core';
import {Connaissance} from "../model/Connaissance";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {
  skills:Array<Connaissance>;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.skills = [
      new Connaissance(1,'javascript')
    ]

    this.route.paramMap.subscribe((params:ParamMap) => {
      console.log('isSkills', params.get('idSkills'));
    });
  }

}
