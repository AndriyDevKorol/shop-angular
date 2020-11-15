import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeModule } from './home-page/home.module';
import { CartModule } from './cart/cart.module';
import { FormsModule } from '@angular/forms';
import { LeftSectionModule } from './left-section/left-section.module';
import { LeftSectionComponent } from './left-section/left-section.component';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-section/left-menu/left-menu.component';

@NgModule({
  declarations: [
    ClientPortalComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ClientRoutingModule,
    HomeModule,
    CartModule,
    LeftSectionModule
  ]
})
export class ClientModule{ }
