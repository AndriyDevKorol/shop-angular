import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import {HomePageComponent} from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipe.module';

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
    ClientRoutingModule,
    FormsModule,
    PipesModule
  ]
})
export class ClientModule { }
