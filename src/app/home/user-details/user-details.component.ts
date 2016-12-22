import { Component, Input } from '@angular/core';

import { UserModel } from './../../app_core/models/user.model';

@Component({
  selector: '[app-user-details]',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements Input {

  constructor() { }

  @Input() user: UserModel;

  get email(): string {
    return this.user.email;
  }

  get userPhoto(): string {
    return this.user.userPhoto;
  }
 
}
