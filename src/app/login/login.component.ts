import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './../app_core/services/authentication.service';
import { AlertService } from './../app_core/services/alert.service';

import { UserLoginModel } from './../app_core/models/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  private model: UserLoginModel;
  private loading: boolean;
  private returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {   
    this.model = new UserLoginModel;
    this.loading = false;
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password, this.loading, this.returnUrl);
  }

}
