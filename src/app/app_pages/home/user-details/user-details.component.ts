import { Component, Input } from '@angular/core';

import { UserModel } from './../../../app_core/models/user.model';

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
    return this.user.userPhoto === null ? 'https://api.backendless.com/EB364692-B174-248D-FF33-8BBBF9FD7800/v1/files/media/usersPhotos/avatar_noImage.jpg' : this.user.userPhoto;
  }
 
}
