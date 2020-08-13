import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientRoutingModule} from './client-routing.module';
import {ClientPortalComponent} from './client-portal/client-portal.component';
import {HomePageComponent} from './home-page/home-page.component';


@NgModule({
  declarations: [
    ClientPortalComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,

  ]
})
export class ClientModule { }
