import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private messageSourse = new Subject<any>();
  // currebtMessage = this.messageSourse.asObservable();
  private addToCart: BehaviorSubject<Product> = new BehaviorSubject({});
  addToCartEvent = this.addToCart.asObservable();

  constructor( ) { }



  onAddToCart(productKey:string){
    console.log('addcartMethod.', productKey);
    // this.pr.subscribe(data =>{
    //   console.log('fewfwef')
    // });
    // this.messageSourse.next(productKey);
  }

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
    console.log('emit')
    this.addToCart.next(product);
    console.log(product);
  }
}
