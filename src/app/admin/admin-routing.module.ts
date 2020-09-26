import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {AdminPortalComponent} from "./admin-portal/admin-portal.component";
import { AuthGuardService } from '../core/services/guards/auth-guard.service';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'admin',
  //   pathMatch: 'full',
  //   // canActivate: [AngularFireAuthGuard],
  // },
  {
    path: 'admin',
    component: AdminPortalComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class AdminRoutingModule {
}
