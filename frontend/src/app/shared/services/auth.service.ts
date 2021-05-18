import { Injectable } from '@angular/core';
import {HttpClient , HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt'
import { Router } from '@angular/router';
import decode from 'jwt-decode'
import {NgxRolesService} from 'ngx-permissions'

const helper = new JwtHelperService()

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public verificar = false
  private headers:HttpHeaders
  constructor(private http:HttpClient, private router:Router, private roles:NgxRolesService) {

      this.headers = new HttpHeaders({
        'Content-Type':'application'
      })

   }




  login(email, password){
    const params = { email, password }
    return this.http.post(`${environment.uri}/api/auth/login`, params,{ headers:this.headers })
    }

   public isAuthenticated(){
      const token = JSON.parse(localStorage.getItem('token')) 
      const tokenDecode:any = decode(token)
      console.log(tokenDecode)
      this.roles.addRole(tokenDecode.roles,[])
      this.verificar= true 
      return  helper.isTokenExpired(token)
    } 


   public getToken(){
      if(JSON.parse(localStorage.getItem('token'))){
        return true 
      }else {
        this.router.navigate(['/login'])
        return false
      }
    }

    logout(){
      if(JSON.parse(localStorage.getItem('token'))){
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
        this.verificar= false
      }
    }

}
