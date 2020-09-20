import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientPortalComponent} from "./client-portal/client-portal.component";
import { HomeContentComponent } from '../features/main/home-content/home-content.component';
import { ProductsListComponent } from './products-list/products-list.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: ClientPortalComponent,
  children: [
    {
      path: '',
      component: HomeContentComponent
    },
    {
      path: 'products',
      component: ProductsListComponent
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
