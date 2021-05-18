import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRotingModule } from './login-roting.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRotingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
