import { Component, OnInit } from '@angular/core';

import { UserService } from './../../app_core/services/user.service';

import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private users: UserProfileModel[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.title = 'Users';

    this.getAllUsers();
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

}
