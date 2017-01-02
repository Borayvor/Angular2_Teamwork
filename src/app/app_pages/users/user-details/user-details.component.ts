import { Component, OnInit, Input } from '@angular/core';

import { UserProfileModel } from './../../../app_core/models/user-profile.model';

@Component({
  selector: '[app-user-details]',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, Input {

  constructor() { }

  ngOnInit(){
  }

  @Input() user: UserProfileModel;

  get email(): string {
    return this.user.email;
  }

  get userPhoto(): string {    
    return this.user.userPhoto;
  }

  get userCreated():any{
    return this.user.created;
  }
 
}
