import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FilterUsersPipe } from './app_core/pipes/filter-users.pipe';

import { UserService } from './app_core/services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterUsersPipe  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
