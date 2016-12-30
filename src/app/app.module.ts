import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { FilterUsersPipe } from './app_core/pipes/filter-users.pipe';

// directives
import { ChangeStateDirective } from './app_core/directives/change-state.directive';
import { Pane } from './app_core/directives/pane.directive';

//Services
import { BaseService } from './app_core/services/base.service';
import { UserService } from './app_core/services/user.service';
import { AlertService } from './app_core/services/alert.service';
import { AuthGuardService } from './app_core/services/auth-guard.service';
import { AuthenticationService } from './app_core/services/authentication.service';
import { AdventureService } from './app_core/services/adventure.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './app_pages/home/home.component';
import { RegisterComponent } from './app_pages/register/register.component';
import { LoginComponent } from './app_pages/login/login.component';
import { UserDetailsComponent } from './app_pages/users/user-details/user-details.component';
import { AboutComponent } from './app_pages/about/about.component';
import { UserProfileComponent } from './app_pages/user-profile/user-profile.component';
import { UsersComponent } from './app_pages/users/users.component';
import { AdventureComponent } from './app_pages/adventure/adventure.component';
import { SnapshotComponent } from './app_pages/adventure/snapshot/snapshot.component';
import { AdventureHomeDataComponent } from './app_pages/home/adventure-home-data/adventure-home-data.component';
import { UserProfileDataComponent } from './app_pages/user-profile/user-profile-data/user-profile-data.component';
import { UserProfileEditComponent } from './app_pages/user-profile/user-profile-edit/user-profile-edit.component';

@NgModule({
  declarations: [
    FilterUsersPipe,
    ChangeStateDirective,
    Pane,
    AppComponent,
    HomeComponent,    
    RegisterComponent,
    LoginComponent,
    UserDetailsComponent,
    AboutComponent,
    UserProfileComponent,
    UsersComponent,
    AdventureComponent,
    AdventureHomeDataComponent,
    UserProfileDataComponent,
    UserProfileEditComponent,
    SnapshotComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BaseService,
    UserService,
    AlertService,
    AuthGuardService,
    AuthenticationService,
    AdventureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
