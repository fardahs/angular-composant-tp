import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  user:any;

  constructor(private route: ActivatedRoute, private userService:UserServiceService) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe((params:ParamMap) => {

      const login = params.get('user');
      console.log('user', params.get('user'));

      this.userService.getUser(login).then((data) =>{
        this.user = data
        console.log(data)
      })

});

  }
  }
