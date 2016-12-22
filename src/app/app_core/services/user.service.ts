import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { DataService } from './data.service';

import { UserModel } from './../models/user.model';

@Injectable()
export class UserService {
  private usersUrl: string = 'Users';

  constructor(private data: DataService) { }
  
  getAllUsers(): Observable<UserModel[]>{
    return this.data.get(this.usersUrl);
  }

}
