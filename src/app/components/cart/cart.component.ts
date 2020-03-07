import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
// import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnInit, OnDestroy {
editProductKey: string;
subscription: Subscription;
products: Product[] = [];
cartEventSubscription: Subscription;

product: Product = {
  $key:'',
  title: '',
  price: 0,
  body: '',
};

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit(){
     this.cartEventSubscription = this.productService.addToCartEvent.subscribe((products: Product[]) => {
        this.products = products;
        // localStorage.getItem('cart');
        console.log('cart',this.products);
      })
  }

  clearCart():void{
    // this.productService.clearCart();
  }

  ngOnDestroy(): void {
    console.log("destroyed");
    this.cartEventSubscription.unsubscribe();
  }
}
