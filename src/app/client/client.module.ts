import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HomeModule } from './home-page/home.module';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [
    ClientPortalComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LeftMenuComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    HomeModule,
    CartModule
  ]
})
export class ClientModule{ }
