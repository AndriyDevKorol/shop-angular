import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afauth: AngularFireAuth,
    private  http: HttpClient
  ) { }


  login(email,  password){
    return this.afauth.auth.signInWithEmailAndPassword(email, password);
   }

   logout(){
     if(this.afauth.auth.currentUser){

     }
   }

   signup(email, password): Promise<any>{
     return this.afauth.auth.createUserWithEmailAndPassword(email, password);
   }


   resetPassword(email){
    return this.afauth.auth.sendPasswordResetEmail(email);
   }
}
