import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from 'src/app/core/services/product.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/shared/pipes/pipe.module';



@NgModule({
  declarations: [
    ProductComponent
  ],
  providers: [
    ProductService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    PipesModule
  ],
  exports: [ProductComponent]
})
export class ShowsModule { }
