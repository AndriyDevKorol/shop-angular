import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '',
      loadChildren: () => import('./client/client.module').then(client => client.ClientModule),
    },
    {
      path: 'auth',
      loadChildren: () => import('./core/auth/auth.module').then(login => login.AuthModule),
      // canActivate: [AuthGuardService]
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule),
    },
    {path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }

