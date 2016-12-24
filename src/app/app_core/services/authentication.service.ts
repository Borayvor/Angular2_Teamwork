import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';

@Injectable()
export class AuthenticationService {
  private loginUrl: string;
  private logoutUrl: string; 
  private currentUser: any;

  constructor(private router: Router, private data: BaseService) {   
    this.loginUrl = '/users/login'; 
    this.logoutUrl = '/users/logout';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(email: string, password: string) {
    return this.data.post(this.loginUrl, JSON.stringify({ login: email, password: password }));
  }

  logout(): void { 
    this.data.get(this.logoutUrl);
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

}
