import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  inputValue:FormGroup

  constructor(
     private formBuilder:FormBuilder,
     private authservice:AuthService,
     private router:Router
     
     ) { }

  ngOnInit(): void {

    if(JSON.parse(localStorage.getItem('token'))){
        this.router.navigate(['/profile'])
    }

    this.inputValue= this.formBuilder.group({
      email :["",[Validators.required]],
      password :["",[Validators.required]],
    })
  }


  send(){
    const {email, password } = this.inputValue.value
    this.authservice.login(email, password).subscribe(
     ( res: {accessToken:string} ) =>{
        localStorage.setItem('token', JSON.stringify(res.accessToken))
        this.router.navigate(['/home'])
      },
      err => console.log(err.error)
    )
    this.inputValue.reset()
  }

}
