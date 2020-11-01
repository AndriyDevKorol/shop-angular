import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/shared/pipes/pipe.module';
import { ProductService } from '../services/product.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    ProductComponent,
    ProductTileComponent
  ],
  providers: [
    ProductService
  ],
  exports:[
    ProductComponent,
    ProductTileComponent
  ]
})
export class ProductsModule { }
