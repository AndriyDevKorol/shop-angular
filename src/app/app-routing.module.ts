import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeContentComponent } from './features/main/home-content/home-content.component';

const routes: Routes = [
  {
    path: '',
    // redirectTo: '/',
    component: HomeContentComponent},
    {
      path: 'auth',
      loadChildren: () => import('./core/auth/auth.module').then(login => login.AuthModule),
      // canActivate: [AuthGuardService]
    },
    {
      path: 'user',
      loadChildren: () => import('./client/client.module').then(client => client.ClientModule),
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule),
    },
    {path: '**', component: PageNotFoundComponent}
]

// const routes: Routes = [
//   {path: '', component: MainComponent, children: childRoutes},
//   {path: 'cart', component: CartComponent},
//   {path: 'login', component: LoginComponent},
//   {path: 'product-details', component: ProductDetailsComponent},

//   {path: '**', component: PageNotFoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const RoutingComponent = [
//   MainComponent,
//   CartComponent,
//   LoginComponent,
//   PageNotFoundComponent,
//   ProductDetailsComponent,
//   ProductsListComponent,
//   HomeContentComponent
// ];
