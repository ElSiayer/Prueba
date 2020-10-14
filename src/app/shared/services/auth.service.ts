import { Injectable } from '@angular/core';
import { UserLog } from "../models/user.interface";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: Observable<firebase.User>;
  constructor(private afauth: AngularFireAuth) {
    this.userData = afauth.authState;
   }

  loginEmail(user: UserLog){
    //const {mail, pass}=user;
    return this.afauth.signInWithEmailAndPassword(user.mail,user.pass);

  }
  register(user: UserLog){
    //const {mail, pass}=user;
    return this.afauth.createUserWithEmailAndPassword(user.mail,user.pass);

  }
  logout(){
    this.afauth.signOut();
  }
}
