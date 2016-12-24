import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { BaseService } from './base.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  private userToken: string;
  private validateUserUrl: string;

  constructor(private router: Router, private data: BaseService) {    
  }

  canActivate() {
    this.userToken = localStorage.getItem('currentUser') !== null ? localStorage.getItem('currentUser')['token'] : '';
    this.validateUserUrl = '/users/isvalidusertoken/' + this.userToken;

    if (this.isValidUser()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  private isValidUser(): boolean {
    let isValid: boolean = false;

    this.data.get(this.validateUserUrl)
      .subscribe(
      data => {
        isValid = data;

        console.log(isValid);
      });

    return isValid;
  }

}
