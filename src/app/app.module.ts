import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/components/alert/alert.component';
import { RestorPasswordComponent } from './shared/components/restor-password/restor-password.component';
import { environment } from '../environments/environment';
import { AngularFireLite } from 'angularfire-lite';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SearchComponent } from './shared/components/search/search.component';
import { RangePipe } from './shared/pipes/range.pipe';
import { CoreModule } from './core/core.module';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './core/auth/auth.module';
import { AuthGuardService } from './core/services/guards/auth-guard.service';
import { PipesModule } from './shared/pipes/pipe.module';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from './core/services/messages/message.service';

@NgModule({
  declarations: [
    AppComponent,


    LoaderComponent,
    AlertComponent,
    RestorPasswordComponent,
    SearchComponent,
    RangePipe,
  ],
  imports: [
    BrowserModule,
    ClientModule,
    HttpClientModule,
    AdminModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),



    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,

    AngularFireLite.forRoot(environment.config),
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule,
  ],
  providers: [
    AuthGuardService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
