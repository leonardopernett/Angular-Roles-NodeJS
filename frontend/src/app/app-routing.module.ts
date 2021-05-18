import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './auth.guard';
import {NgxPermissionsGuard} from 'ngx-permissions'
const routes:Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
   },
   {
     path:'login', 
     loadChildren:()=>import('./login/login.module').then(m =>m.LoginModule)
   },
   {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    canLoad:[NgxPermissionsGuard],
    data:{
      permissions: {
        only: 'admin' // Externo es el rol que viene de la base de datos
      }
    }
   },
   {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard],
    canLoad:[NgxPermissionsGuard],
      data:{
        Permissions:{
          except:"admin"
        }
      }
   }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
