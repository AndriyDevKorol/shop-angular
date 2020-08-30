import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import {HomePageComponent} from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminRoutingModule } from '../admin/admin-routing.module';


@NgModule({
  declarations: [
    ClientPortalComponent,
    HomePageComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClientRoutingModule,

  ]
})
export class ClientModule { }
