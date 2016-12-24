import './app_rxjs';

import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from './app_core/services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title: string;
  private isAuthenticated: boolean;
  private user: {};

  constructor(private authGuard: AuthGuardService) {
    this.title = 'App works !';

  }

  ngOnInit() {
    this.isAuthenticated = this.authGuard.canActivate();
    
  }
}
