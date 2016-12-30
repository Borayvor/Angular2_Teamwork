import { Component, OnInit, Input } from '@angular/core';

import { UserProfileModel } from './../../../app_core/models/user-profile.model';

@Component({
  selector: '[app-user-profile-data]',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.css']
})
export class UserProfileDataComponent implements OnInit, Input {

  constructor() { }

  @Input('userModel') user: UserProfileModel;

  ngOnInit() {
    
  }

}
