import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addToCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  addToCartEvent = this.addToCart.asObservable();
  products: Product[] = [];

  constructor( ) { }

  clearCart(){
    // this.messageSourse.next();
  }

  getCart(){
    console.log('cart Service');
    // this.pr.subscribe(data => {
    //   console.log(data);
    // });

  }


  emitAddToCart(product: Product){   
    this.products.push(product);
    this.addToCart.next(this.products);   
  }
}
