import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  users:Array<Object[]> = [];
  repos:any;
  followers:any;

  constructor(private route: ActivatedRoute, private router: Router, private userService:UserServiceService) { }

  ngOnInit() {
    this.route.paramMap
        .subscribe((params:ParamMap) => {
          const login = params.get('user');
          console.log('user', login);

    this.userService.getUser(login).then((data:any) =>{
      this.users = data;
      console.log(data);
    });

  });

  }

}
