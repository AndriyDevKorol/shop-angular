import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { Input } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();
  detailsEventSubscription: Subscription;
  product: ProductModel;
  countVal = 1;
  cartProducts:ProductModel[];
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
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.getProduct();
    this.cartService.addCartProductsEvent.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.cartProducts = data);
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
  addToCart(data: ProductModel) {
    let exist = this.cartProducts.some(item => item.$key == data.$key);
    if(exist){
      this.messageService.infoMessage('Продукт - ' + data.title + ' вже доданий в корзину');
      return
    }
      data.count = this.countVal;
      this.cartProducts.push(data);
      this.cartService.addCartProducts(this.cartProducts);
      this.messageService.successMessage('Продукт - ' + data.title + ' успішно додано в корзину');
  }


  // ngOnDestroy(): void {
  //   this.detailsEventSubscription.unsubscribe();
  // }

  onCount(){
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
