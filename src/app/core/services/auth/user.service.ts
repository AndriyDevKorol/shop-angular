import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import UserCredential = firebase.auth.UserCredential;
import { fromPromise } from "rxjs/internal-compatibility";
import { Observable } from "rxjs";
import { AuthSignInErrorCode, AuthSignUpErrorCode } from 'src/app/models/auth-error.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  authSignInErrorCode = AuthSignInErrorCode;
  authSignUpErrorCode = AuthSignUpErrorCode;

  constructor(
    private afauth: AngularFireAuth,
  ) { }

  getErrorSignInMessage(code: string): string {
    return this.authSignInErrorCode[code];
  }

  getErrorSignUpMessage(code: string): string {
    return this.authSignUpErrorCode[code];
  }

  getUser(){
    return this.afauth.authState.pipe(
      map( user => {
        if (user) {
          return {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email
          }
        }
        return null;
      })
    )
  }

  signInWithEmailAndPassword(email,  password) {
    return fromPromise<UserCredential>(this.afauth.auth.signInWithEmailAndPassword(email, password));
  }

  singUpWithEmailAndPassword(email, password) {
    return fromPromise<UserCredential>(this.afauth.auth.createUserWithEmailAndPassword(email, password));
  }

  signOut(): Observable<void> {
    return fromPromise(this.afauth.auth.signOut());
  }

  resetPassword(email) {
  return this.afauth.auth.sendPasswordResetEmail(email);
  }
}
