import { Component, OnInit } from '@angular/core';

import { UserService } from './../app_core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private email: string = '';
  private userPhoto: string = '';
  private password: string = '';
  private confirmPassword: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
