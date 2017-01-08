import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { FilterUsersPipe } from './app_core/pipes/filter-users.pipe';
import { SortedUserPipe } from './app_core/pipes/sorted-user.pipe';

// directives
import { LoginDirective } from './app_core/directives/login.directive';
import { ChangeStateDirective } from './app_core/directives/change-state.directive';

//Services
import { BaseService } from './app_core/services/base.service';
import { UserService } from './app_core/services/user.service';
import { AlertService } from './app_core/services/alert.service';
import { AuthGuardService } from './app_core/services/auth-guard.service';
import { AuthenticationService } from './app_core/services/authentication.service';
import { AdventureService } from './app_core/services/adventure.service';
import { UploadPhotoService } from './app_core/services/upload-photo.service';
import { PagerService } from './app_core/services/pager.service';

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
import { UserProfileDataComponent } from './app_pages/user-profile/user-profile-data/user-profile-data.component';
import { UserProfileEditComponent } from './app_pages/user-profile/user-profile-edit/user-profile-edit.component';
import { AdventuresComponent } from './app_pages/adventures/adventures.component';
import { AdventureDataComponent } from './app_pages/adventures/adventure-data/adventure-data.component';
import { AdventureCreateComponent } from './app_pages/adventure-create/adventure-create.component';
import { AddSnapshotsComponent } from './app_pages/adventure-create/add-snapshots/add-snapshots.component';
import { SortedAdventurePipe } from './app_core/pipes/sorted-adventure.pipe';
import { FillterAdventuresPipe } from './app_core/pipes/fillter-adventures.pipe';
import { NotFoundComponent } from './app_pages/not-found/not-found.component';

@NgModule({
  declarations: [    
    FilterUsersPipe,
    LoginDirective,
    ChangeStateDirective,
    AppComponent,
    HomeComponent,    
    RegisterComponent,
    LoginComponent,
    UserDetailsComponent,
    AboutComponent,
    UserProfileComponent,
    UsersComponent,
    AdventureComponent,
    UserProfileDataComponent,
    UserProfileEditComponent,
    SnapshotComponent,
    AdventuresComponent,
    AdventureDataComponent,
    AdventureCreateComponent,
    SortedUserPipe,
    SortedAdventurePipe,
    FillterAdventuresPipe,
    NotFoundComponent,
    AddSnapshotsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    BaseService,
    UserService,
    AlertService,
    AuthGuardService,
    AuthenticationService,
    AdventureService,
    UploadPhotoService,
    PagerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
