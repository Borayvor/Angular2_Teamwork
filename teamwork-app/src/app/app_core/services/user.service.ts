import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { User } from './../models/user.model';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

}
