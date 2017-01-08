import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService } from './../../app_core/services/alert.service';
import { UserService } from './../../app_core/services/user.service';
import { AdventureService } from './../../app_core/services/adventure.service';
import { AuthenticationService } from './../../app_core/services/authentication.service';

import { UserProfileModel } from './../../app_core/models/user-profile.model';
import { AdventureModel } from './../../app_core/models/adventure.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private errorMessage: string;
  private user: UserProfileModel;
  private adventures: AdventureModel[];
  private adventuresCount: number;
  private isCurrentUser: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private userService: UserService,
    private adventureService: AdventureService,
    private authenticationService: AuthenticationService
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
        let currentUser: UserProfileModel = this.authenticationService.getCurrentUser();
        this.isCurrentUser = this.user.email === currentUser.email;

        this.adventureService.getAllAdventuresByAuthorId(this.user.objectId).subscribe(adventureData => {
          this.adventures = adventureData.data;
          this.adventuresCount = this.adventures.length;
        }, error => {
          this.alertService.error(error);
        });
      },
      error => this.errorMessage = <any>error
      );
  }

}
