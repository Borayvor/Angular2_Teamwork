import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticationService } from './../app_core/services/authentication.service';
import { AlertService } from './../app_core/services/alert.service';
import { UserService } from './../app_core/services/user.service';

// import { UserLoginModel } from './../app_core/models/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, AlertService, UserService]
})
export class LoginComponent implements OnInit {
  private currentUser: any;
  private token: boolean;
  private model: any;
  private loading = false;
  private returnUrl: string;
  // private userLoginModel: UserLoginModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = this.currentUser && this.currentUser.token;
    this.model = {};
  }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password, this.loading);
    // .subscribe(
    // data => {
    //   this.userLoginModel = data        
    //   localStorage.setItem('currentUser', JSON.stringify({ email: this.userLoginModel.email, token: this.userLoginModel['user-token'] }));        
    //   this.router.navigate([this.returnUrl]);
    // },
    // error => {
    //   this.alertService.error(error);
    //   this.loading = false;
    // });
  }

}
