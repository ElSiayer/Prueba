import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service'
import { UserLog } from "../../../shared/models/user.interface";
import { FormGroup, FormControl , Validators } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService, private route: Router) { }
  loginForm = new FormGroup({
    mail: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  onLogin(form : UserLog){    
    this.authSvc.loginEmail(form).then(res=>{ 
      console.log("Ingreso exitoso: ",res)}).catch(erorx => console.log("Error: ",erorx));
      this.route.navigate(['/']);
  }

}
