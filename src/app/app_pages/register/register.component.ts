import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './../../app_core/services/authentication.service';

import { UserRegisterModel } from './../../app_core/models/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private model: UserRegisterModel;

  constructor(
    private authenticationService: AuthenticationService    
  ) {
    this.model = new UserRegisterModel;
  }

  ngOnInit() {
  }

  register() {
    this.authenticationService.register(this.model)
  }

}
