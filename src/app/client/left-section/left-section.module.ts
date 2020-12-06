import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftSectionComponent } from './left-section.component';



@NgModule({
  declarations: [
    LeftMenuComponent,
    LeftSectionComponent

  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [LeftMenuComponent,
    LeftSectionComponent
  ]
})
export class LeftSectionModule { }
