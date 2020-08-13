import { Injectable } from '@angular/core';
// import { AuthService } from '../services/auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
// import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    // private auth: AuthService,
    private router: Router,
    // private userService: UserService
    ) {}
  canActivate() : Observable<boolean> | boolean{
    //  return this.userService.getCurrentUserObservable().pipe(map(permission => {
      debugger;
      // console.log(permission.uid);
      // if(permission.email) {
      //   this.router.navigate(['/admin/main']);
      //   return false;
      // }
      return true;
    //  }));


  }
}
