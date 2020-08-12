import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './features/products/products-list/products-list.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { ProductComponent } from './features/products/product/product.component';
import { ProductFormComponent } from './features/add-product-form/product-form.component';
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
import { CartItemComponent } from './features/cart/cart-item/cart-item.component';
import { RecipeComponent } from './features/cart/recipe/recipe.component';
import { FirebaseStoreService } from './shared/services/firebaseStore/firebase-store.service';
import { HomeContentComponent } from './features/main/home-content/home-content.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { ProductWidgetComponent } from './shared/components/widgets/product-widget/product-widget.component';
import { AdsWidgetComponent } from './shared/components/widgets/ads-widget/ads-widget.component';
import { LeftSectionComponent } from './features/main/left-section/left-section.component';
import { CoreModule } from './core/core.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    LoaderComponent,
    ConfirmationButtonComponent,
    ProductsListComponent,
    AlertComponent,
    ProductComponent,
    ProductFormComponent,
    RestorPasswordComponent,
    SearchComponent,
    FilterPipe,
    RangePipe,
    CartItemComponent,
    RecipeComponent,
    HomeContentComponent,
    CarouselComponent,
    ProductWidgetComponent,
    AdsWidgetComponent,
    LeftSectionComponent
  ],
  imports: [
    ClientModule,
    CoreModule,
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
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
  ],
  providers: [
    ProductService,
    CartService,
    AuthService,
    FirebaseStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
