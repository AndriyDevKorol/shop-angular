import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { ShareDataService } from '../../services/shareData.service';
import { ProductsModule } from '../products.module';
import { Subscription } from 'rxjs/internal/Subscription';
import { LocalStorageService } from '../../services/storage/localStorage.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: ProductModel;
  products$: ProductModel[];
  unsubscribe$ = new Subject();
  searchTerm: string;
  selectedCategory: string;
  isAdmin = this.afauth.auth.currentUser;
  countVal = 1;
  editProductKey: string;
  productId: any;
  storageValue = []

  private subscription: Subscription;

  constructor(
    private router: Router,
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService,
    private afauth: AngularFireAuth,
  ) {
    // router.events.subscribe(console.log);
  }

  ngOnInit() {
    this.productId = this.product.$key;
    this.subscription = this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params=>this.productId=params['id']);
  }


  getProductOfCategory(selectedCategory: string){
    this.productService.getProductByCategory(selectedCategory);
  }

  onDelete(product: ProductModel): void {
    this.productService.deleteProduct(product);
    this.localStorageService.removeLocalStoargeData(product.$key);
  }

  onEdit(product: ProductModel): void {
    //  this.productService.emitEditProduct(product);
  }

  onCount(counter: number) {
    this.countVal = this.countVal + counter;
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }


  addToCart(value: string) {
    let storageKey = 'cart';
    let storageData = this.localStorageService.getLocalStorageData(storageKey) || [];

    if(value){
      let exist = storageData.some(item => item === value );
      if(exist){return};
      storageData.push(value);
    }

    this.localStorageService.setDataToLocalStorage(storageKey, storageData);
  }

  onReset(){}

  onDetailsProduct(product: ProductModel) {
    // this.productService.emitDetailProduct(product);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
