import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './client/page-not-found/page-not-found.component';


const routes: Routes = [
    { path: '',
      pathMatch: 'full',
      loadChildren: () => import('./client/client.module').then(client => client.ClientModule)
    },
    {
      path: 'auth',
      loadChildren: () => import('./core/auth/auth.module').then(login => login.AuthModule)
    },
    {
      path: 'admin',
      loadChildren: () => import('./admin/admin.module').then(admin => admin.AdminModule),
    },
    { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule{ }

