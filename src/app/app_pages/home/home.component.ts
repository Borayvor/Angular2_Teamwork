import { Component, OnInit } from '@angular/core';

import { AdventureService } from './../../app_core/services/adventure.service';
import { UserService } from './../../app_core/services/user.service';

import { AdventureHomeModel } from './../../app_core/models/adventure-home.model';
import { UserProfileModel } from './../../app_core/models/user-profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private title: string;
  private errorMessage: string;
  private adventure: AdventureHomeModel;
  private user: UserProfileModel;

  constructor(
    private adventureService: AdventureService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title = 'Home';

    this.getLastAdventure();
  }

  getLastAdventure() {
    this.adventureService
      .getAllAdventures()
      .subscribe(
      data => {
        let adventures: AdventureHomeModel[] = data.data;        
        adventures.sort(this.sortCreatedAsc);        
        this.adventure = adventures.pop();
        this.getUser(this.adventure.ownerId);
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

  private sortCreatedAsc(a: AdventureHomeModel, b: AdventureHomeModel) {
    return +a.created - +b.created;
  }
}
