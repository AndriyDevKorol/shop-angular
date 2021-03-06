import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart.service';
import { MessageService } from 'src/app/core/services/messages/message.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.less']
})
export class ProductTileComponent implements OnInit, OnDestroy {
  @Input() product$: ProductModel;
  cartProducts:ProductModel[];
  unsubscribe$ = new Subject();
  countVal:number = 1;

  constructor(
    private cartService: CartService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.cartService.addCartProductsEvent.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.cartProducts = data);
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

  onCount() {
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
