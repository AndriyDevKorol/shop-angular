import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPortalComponent } from '../client-portal/client-portal.component';
import { RecipeComponent } from './recipe/recipe.component';


const routes: Routes = [
  {
    path: '',
    component: ClientPortalComponent,
    children: [
      {
        path: 'cart/recipe',
        component: RecipeComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {
}
