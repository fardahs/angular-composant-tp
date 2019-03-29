import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'route-cli';
  idDetail = 1;

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      console.log('EVENTS',event);
    });
  }
}
