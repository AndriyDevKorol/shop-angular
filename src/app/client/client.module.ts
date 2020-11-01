import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import {HomePageComponent} from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ProductTileComponent } from '../core/products/product-tile/product-tile.component';

@NgModule({
  declarations: [
    ClientPortalComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LeftMenuComponent,
    ProductTileComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
