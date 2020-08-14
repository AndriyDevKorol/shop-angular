import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralInterceptor } from "./general.interceptor";
import { UserService } from "./services/auth/user.service";
import { HttpService } from "./services/http.service";
import { AlertService } from "./services/alert.service";


@NgModule({
  declarations: [],
  providers: [
    GeneralInterceptor,
    AlertService,
    HttpService,
    UserService
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ]
})
export class CoreModule { }
