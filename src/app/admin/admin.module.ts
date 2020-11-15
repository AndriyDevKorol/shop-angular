import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPortalComponent} from './admin-portal/admin-portal.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [
    AdminPortalComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
