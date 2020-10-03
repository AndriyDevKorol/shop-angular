import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ClientPortalComponent} from "./client-portal/client-portal.component";
import { ProductsListComponent } from './products-list/products-list.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientPortalComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'products',
        component: HomePageComponent
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
