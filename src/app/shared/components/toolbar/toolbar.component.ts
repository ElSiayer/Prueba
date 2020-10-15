import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers:[AuthService]
})
export class ToolbarComponent implements OnInit {
  public LogIn=false;
  public usuario:any;
  constructor(public authSvc: AuthService) { }
  async ngOnInit(){
    this.authSvc.userData.subscribe(user =>{
      console.log( user.email);
      this.usuario=user.email;
    })
  }

  onLogout():void{
    this.authSvc.logout();
    this.LogIn=false;
  }

}
