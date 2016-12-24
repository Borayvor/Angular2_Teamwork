import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routes
import { AppRoutingModule } from './app-routing.module';

// Pipes
import { FilterUsersPipe } from './app_core/pipes/filter-users.pipe';

//Services
import { BaseService } from './app_core/services/base.service';
import { UserService } from './app_core/services/user.service';
import { AlertService } from './app_core/services/alert.service';
import { AuthGuardService } from './app_core/services/auth-guard.service';
import { AuthenticationService } from './app_core/services/authentication.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './home/user-details/user-details.component';

@NgModule({
  declarations: [
    FilterUsersPipe,
    AppComponent,
    HomeComponent,    
    RegisterComponent,
    LoginComponent,
    UserDetailsComponent
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
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
