import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './../../../app/core/auth/sign-in/sign-in.component';
import { SignUpComponent } from './../../../app/core/auth/sign-up/sign-up.component';
// import { AuthGuardService } from '../guards/auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
    // canActivate: [AuthGuardService]

  },
  {
    path: 'register',
    component: SignUpComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  // providers: [AuthGuardService]
})
export class AuthRoutingModule { }
