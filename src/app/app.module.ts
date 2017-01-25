import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { FillterAdventuresPipe } from './app_core/pipes/fillter-adventures.pipe';
import { SortAdventuresPipe } from './app_core/pipes/sort-adventures.pipe';
import { FilterUsersPipe } from './app_core/pipes/filter-users.pipe';
import { SortUsersPipe } from './app_core/pipes/sort-users.pipe';

// directives
import { AppFileSelectDirective } from './app_core/directives/app-file-select.directive';

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
import { NotFoundComponent } from './app_pages/not-found/not-found.component';
import { FooterComponent } from './app_component/footer/footer.component';
import { NavigationComponent } from './app_component/navigation/navigation.component';

@NgModule({
  declarations: [
    FilterUsersPipe,
    AppFileSelectDirective,
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
    SortUsersPipe,
    SortAdventuresPipe,
    FillterAdventuresPipe,
    NotFoundComponent,
    AddSnapshotsComponent,
    FooterComponent,
    NavigationComponent
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
    AdventureService,
    UploadPhotoService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
