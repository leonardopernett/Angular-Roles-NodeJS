import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavComponent } from './shared/nav/nav.component';
import { AuthService } from './shared/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPermissionsModule} from 'ngx-permissions'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [ AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
