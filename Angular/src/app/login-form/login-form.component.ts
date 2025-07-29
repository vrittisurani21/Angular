import { NgIf } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
 private_fb = inject(FormBuilder)
 private router=inject(Router)
  LoginForm:FormGroup=this.private_fb.group({
    UserName:['',[Validators.required,Validators.minLength(3)]],
    Password:['',[Validators.required,Validators.pattern("(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}")]]
  })

  loginForm(value:any){
    if(localStorage.getItem("UserName")==value.UserName && localStorage.getItem("Password")==value.Password){
      this.router.navigate(['resume'])
    }else{
      alert("Please Enter Valid Details!")
    }
  }
}
