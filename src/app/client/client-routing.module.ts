import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '../core/components/product-details/product-details.component';
import { ProductsListComponent } from '../core/components/products-list/products-list.component';
import { CartComponent } from './cart/cart.component';
import { ClientPortalComponent } from "./client-portal/client-portal.component";
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClientPortalComponent,
    children: [
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/:category',
        component: ProductsListComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: '',
        component: HomePageComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}
