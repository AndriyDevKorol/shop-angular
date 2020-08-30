import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import {HomePageComponent} from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';
import { ProductComponent } from './product/product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
@NgModule({
  declarations: [
    ClientPortalComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
