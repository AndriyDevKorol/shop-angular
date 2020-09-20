import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AngularFireAuthGuard} from "@angular/fire/auth-guard";
import {AdminPortalComponent} from "./admin-portal/admin-portal.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminPortalComponent,
    canActivate: [AngularFireAuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
