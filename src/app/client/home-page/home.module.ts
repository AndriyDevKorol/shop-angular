import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductTileComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
