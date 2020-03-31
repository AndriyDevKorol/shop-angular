import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ConfirmationButtonComponent } from './shared/components/confirmation-button/confirmation-button.component';
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './components/products/products.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductFormComponent } from './components/add-product-form/product-form.component';
import { ProductService } from './shared/services/product/product.service';
import { RestorPasswordComponent } from './shared/components/restor-password/restor-password.component';
import { environment } from '../environments/environment';
import { AngularFireLite } from 'angularfire-lite';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './shared/services/auth/auth.service';
import { SearchComponent } from './shared/components/search/search.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { CartService } from './shared/services/cart/cart.service';
import { RangePipe } from './shared/pipes/range.pipe';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { RecipeComponent } from './components/cart/recipe/recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoaderComponent,
    ConfirmationButtonComponent,
    ProductsComponent,
    AlertComponent,
    ProductComponent,
    ProductFormComponent,
    RestorPasswordComponent,
    SearchComponent,
    FilterBarComponent,
    FilterPipe,
    RangePipe,
    CartItemComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireLite.forRoot(environment.config),
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    // FileService,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
  ],
  providers: [
    ProductService,
    CartService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
