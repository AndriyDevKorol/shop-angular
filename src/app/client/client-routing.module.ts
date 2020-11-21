import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../core/products/product-details/product-details.component';
import { ProductComponent } from '../core/products/product/product.component';
import { ProductsListComponent } from '../core/products/products-list/products-list.component';
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
        component: ProductsListComponent
      },
      {
        path: 'products/:category',
        component: ProductsListComponent
      },
      {
        path: 'products/:id',
        component: ProductDetailsComponent
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
