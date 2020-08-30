import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientPortalComponent} from "./client-portal/client-portal.component";
import { HomeContentComponent } from '../features/main/home-content/home-content.component';


const routes: Routes = [
{
  path: '',
  pathMatch: 'full'
},
{
  path: '',
  component: ClientPortalComponent,
  children: [
    {
      path: '',
      component: HomeContentComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
