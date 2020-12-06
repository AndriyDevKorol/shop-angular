import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { GeneralInterceptor } from "./general.interceptor";
import { UserService } from "./services/auth/user.service";
import { HttpService } from "./services/http.service";
import { AlertService } from "./services/alert.service";
import { ProductsModule } from './components/products.module';
import { ShareDataService } from './services/shareData.service';
import { LocalStorageService } from './services/storage/localStorage.service';


@NgModule({
  declarations: [],
  providers: [
    GeneralInterceptor,
    AlertService,
    HttpService,
    UserService,
    ShareDataService,
    LocalStorageService
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    ToastrModule.forRoot(),
    ProductsModule
  ]
})
export class CoreModule { }
