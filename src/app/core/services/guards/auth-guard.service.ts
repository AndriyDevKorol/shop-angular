import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../auth/user.service';




@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private userService: UserService
    ) {}
  canActivate() : Observable<boolean> | boolean{
    return this.userService.getUser().pipe(map(permission => {
      if(permission) {
       return true;
      }
      this.router.navigate(['login']);
      return false;
     }));
  }
}
