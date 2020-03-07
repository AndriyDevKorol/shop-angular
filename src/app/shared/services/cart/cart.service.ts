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

  // clearCart(){
  //   this.products = [];
  // }

  // getCart(){

  // }


  // emitAddToCart(product: Product){
  //   this.products.push(product);
  //   this.addToCart.next(this.products);
  // }
}
