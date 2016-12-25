import { Component, OnInit } from '@angular/core';

import { UserService } from './../app_core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
 
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
