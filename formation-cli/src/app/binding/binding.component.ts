import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isHidden:boolean=true;
  color:string='red'
  constructor() { }

  ngOnInit() {
    setInterval( () =>{
      this.isHidden = !this.isHidden;

      if(this.color === 'red'){
        this.color = 'green'
      }else {
        this.color = 'red'
      }
    },2000)

  }
}
