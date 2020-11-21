import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/shared/pipes/pipe.module';
import { ProductService } from '../services/product.service';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    ProductComponent,
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  providers: [
    ProductService,
  ],
  exports:[
    ProductComponent,
    ProductsListComponent,
    ProductDetailsComponent
  ]
})
export class ProductsModule { }
