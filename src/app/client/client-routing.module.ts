import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../core/products/product/product.component';
import { CartComponent } from './cart/cart.component';
import { ClientPortalComponent } from "./client-portal/client-portal.component";
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
        component: ProductComponent
      },
      {
        path: 'products/:category',
        component: ProductComponent
      },
      {
        path: 'products/:id',
        component: ProductComponent
      },
      {
        path: 'cart',
        component: CartComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
