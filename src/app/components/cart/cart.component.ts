import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
import { CartService } from 'src/app/shared/services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnDestroy{

subscription: Subscription;
cart: any;
products: Product[];
key: string;

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(){
   console.log(this.cartService.currebtMessage);

    // console.log('cart', this.cartService.getCart());
   this.cartService.currebtMessage.subscribe(key =>{
     console.log('cart -', this.key);
     this.key = key
    });
   console.log('cart -key', this.key);

  }

  ngOnDestroy(){
    // console.log()
    this.subscription.unsubscribe();
    // this.cart = this.cartService.getCart();
    // console.log('cart', this.cart);
  }

  clearCart():void{
    this.cartService.clearCart();
  }

}
