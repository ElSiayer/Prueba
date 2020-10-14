import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserLog } from "../../../shared/models/user.interface";
import { AuthService } from "../../../shared/services/auth.service";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authSrv: AuthService, private route: Router) { }
  registerMail = new FormGroup({
    mail: new FormControl('',Validators.required),
    pass: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
  register(form : UserLog){    
    this.authSrv.register(form).then(res=>{ 
      console.log("Registro exitoso: ",res)}).catch(erorx => console.log("Error: ",erorx));
      this.route.navigate(['/admin']);
  }
}
