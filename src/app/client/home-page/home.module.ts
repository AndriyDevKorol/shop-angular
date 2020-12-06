import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    ProductTileComponent,
    HomePageComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
