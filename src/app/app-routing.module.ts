import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component'
import { HomeContentComponent } from './components/home/home-content/home-content.component';

const childRoutes: Routes = [
  {path: '', component: HomeContentComponent},
  {path: 'products', component: ProductsListComponent}
]

const routes: Routes = [
  {path: '', component: HomeComponent, children: childRoutes},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product-details', component: ProductDetailsComponent},

  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  HomeComponent,
  CartComponent,
  LoginComponent,
  PageNotFoundComponent,
  ProductDetailsComponent,
  ProductsListComponent,
  HomeContentComponent
];
