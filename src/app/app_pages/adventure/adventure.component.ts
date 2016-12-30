import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdventureService } from './../../app_core/services/adventure.service';
import { UserService } from './../../app_core/services/user.service';

import { AdventureModel } from './../../app_core/models/adventure.model';
import { AdventureDataModel } from './../../app_core/models/adventure-data.model';
import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  private errorMessage: string;
  private adventure: AdventureModel;
  private snapshots: AdventureDataModel[];
  private user: UserProfileModel;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adventureService: AdventureService,
    private userService: UserService
  ) {
    
  }

  ngOnInit() {
    let adventureId = this.route.snapshot.params['id'];
    this.getAdventure(adventureId);
  }

  getAdventure(adventureId: string) {
    this.adventureService
      .getAdventureById(adventureId)
      .subscribe(
      data => {
        this.adventure = data;
        this.getUser(this.adventure.ownerId);
        this.snapshots = this.adventure.data;
      },
      error => this.errorMessage = <any>error
      );
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
