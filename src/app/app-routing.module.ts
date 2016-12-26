import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './app_core/services/auth-guard.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './app_pages/register/register.component';
import { LoginComponent } from './app_pages/login/login.component';
import { HomeComponent } from './app_pages/home/home.component';
import { AboutComponent } from './app_pages/about/about.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }     
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}