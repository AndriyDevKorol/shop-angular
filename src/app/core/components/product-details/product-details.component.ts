import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  // @Input() public product: ProductModel;
  private unsubscribe$ = new Subject();
  detailsEventSubscription: Subscription;
  product: ProductModel;
  countVal = 1;
  id: any
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
    // this.id = this.route.snapshot.params['id'];

    // if(this.id){
    //   this.getProduct(this.id);
    // }
  }
  // unsubscribe$(unsubscribe$: any): any {
  //   throw new Error('Method not implemented.');
  // }
  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
    .pipe(takeUntil(this.unsubscribe$))
      .subscribe((product) => {
        if (product) {
          this.product = product;
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
