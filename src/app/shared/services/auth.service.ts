import { Injectable } from '@angular/core';
import { UserLog } from "../models/user.interface";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { auth } from 'firebase/app';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: any;
  public usuario: any;  
  constructor(private afauth: AngularFireAuth) {
    this.userData = afauth.authState;
    this.usuario=afauth.authState.pipe(first()).toPromise();
   }
   async loginGoogle(){
    try {
      return this.afauth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error)
    }
   }
   currentUser(){
     return this.afauth.currentUser;
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
