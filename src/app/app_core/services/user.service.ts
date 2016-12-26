import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

import { UserModel } from './../models/user.model';

@Injectable()
export class UserService {
  private usersUrl: string;

  constructor(private data: BaseService) {
    this.usersUrl = '/data/Users';
  }

  getAllUsers(): Observable<UserModel[]> {
    return this.data.get(this.usersUrl);
  }

  getUserById(id: string): Observable<UserModel> {        
    return this.data.get(this.usersUrl + '/' + id);
  }

}

