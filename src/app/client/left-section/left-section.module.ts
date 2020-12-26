import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftSectionComponent } from './left-section.component';
import { AdProductComponent } from './ads/ad-product/ad-product.component';


@NgModule({
  declarations: [
    LeftMenuComponent,
    LeftSectionComponent,
    AdProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    LeftMenuComponent,
    LeftSectionComponent,
    AdProductComponent
  ]
})
export class LeftSectionModule { }
