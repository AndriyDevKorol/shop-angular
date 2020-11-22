import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @Input() public product: ProductModel;
  private unsubscribe$ = new Subject();
  detailsEventSubscription: Subscription;
  products: Product[];
  countVal = 1;
  route: any;
  // product: ProductModel = {
  //   $key: '',
  //   title: '',
  //   price: 0,
  //   body: '',
  //   category: '',
  //   shortDescription: ''
  // };

  constructor(
    private productService: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    debugger
    this.route.params
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: Params) => {
        this.getProduct();
      });
    // this.detailsEventSubscription = this.productService.detailProductEvent.subscribe((product: Product[]) => {
    //   this.products = product;
    // });
  }
  // unsubscribe$(unsubscribe$: any): any {
  //   throw new Error('Method not implemented.');
  // }
  getProduct() {
    debugger
    // throw new Error('Method not implemented.');
    const id = +this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(id)
    .pipe(takeUntil(this.unsubscribe$))
      .subscribe((product: Product) => {
        if (product) {
          this.product = product;
          // this.setupProduct();
          // this.productLoading = false;
        } else {
          this.router.navigate(['/404-product-not-found']);
        }
      });
  }

  addToCart(product: Product): void {
    this.product.count = this.countVal;
    // this.productService.emitAddToCart(product);
    alert('Продукт успішно додано в корзину');
  }

  // ngOnDestroy(): void {
  //   this.detailsEventSubscription.unsubscribe();
  // }

  onCount(val: number){
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
