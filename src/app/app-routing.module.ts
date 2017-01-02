import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './app_core/services/auth-guard.service';

import { AppComponent } from './app.component';
import { RegisterComponent } from './app_pages/register/register.component';
import { LoginComponent } from './app_pages/login/login.component';
import { HomeComponent } from './app_pages/home/home.component';
import { AboutComponent } from './app_pages/about/about.component';
import { AdventuresComponent } from './app_pages/adventures/adventures.component';
import { AdventureComponent } from './app_pages/adventure/adventure.component';
import { AdventureCreateComponent } from './app_pages/adventure-create/adventure-create.component';
import { UsersComponent } from './app_pages/users/users.component';
import { UserProfileComponent } from './app_pages/user-profile/user-profile.component';
import { NotFoundComponent } from './app_pages/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'adventures', component: AdventuresComponent, canActivate: [AuthGuardService] },
  { path: 'adventures/create', component: AdventureCreateComponent, canActivate: [AuthGuardService] },
  { path: 'adventures/:id', component: AdventureComponent, canActivate: [AuthGuardService] },  
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'users/:id', component: UserProfileComponent, canActivate: [AuthGuardService] },
  

  // otherwise Not Found
  {path: '**', redirectTo: '/'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }