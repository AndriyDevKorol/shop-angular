import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './../../../app/core/auth/sign-in/sign-in.component';
import { SignUpComponent } from './../../../app/core/auth/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: 'login',
    component: SignInComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
