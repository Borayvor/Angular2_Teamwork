import { Component, OnInit } from '@angular/core';

import { UserService } from './../../app_core/services/user.service';

import { UserModel } from './../../app_core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title: string;
  private users: UserModel[];
  private user: UserModel;
  private errorMessage: string;

  constructor(private userService: UserService) {
  }

  getAllUsers() {
    this.userService
      .getAllUsers()
      .subscribe(
      data => {
        this.users = data.data;        
      },
      error => this.errorMessage = <any>error
      );
  }
  
  ngOnInit() {
    this.title = 'Home works !';

    this.getAllUsers();
   
  }
}
