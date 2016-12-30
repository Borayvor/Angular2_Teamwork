import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from './../../app_core/services/user.service';

import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private errorMessage: string;
  private user: UserProfileModel;
  private isCurrentUser: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.isCurrentUser = false;
  }

  ngOnInit() {
    let userId = this.route.snapshot.params['id'];
    this.getUser(userId);
  }

  getUser(userId: string) {
    this.userService
      .getUserById(userId)
      .subscribe(
      data => {
        this.user = data;
      },
      error => this.errorMessage = <any>error
      );
  }

}