import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPortalComponent} from "./admin-portal/admin-portal.component";
import { AuthGuardService } from '../core/services/guards/auth-guard.service';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminPortalComponent,
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
