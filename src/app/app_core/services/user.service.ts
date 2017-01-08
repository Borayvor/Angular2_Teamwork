import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

import { UserProfileModel } from './../models/user-profile.model';

@Injectable()
export class UserService {
  private usersUrl: string;

  constructor(private data: BaseService) {
    this.usersUrl = '/data/Users';
  }

  getAllUsers(): Observable<any> {
    return this.data.get(this.usersUrl);
  }

  getUserById(id: string): Observable<any> {        
    return this.data.get(this.usersUrl + '/' + id);
  }

  updateUser(user: UserProfileModel): Observable<any> {        
    return this.data.put(this.usersUrl + '/' + user.objectId, user);
  }

}

