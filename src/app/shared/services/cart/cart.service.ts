import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private messageSourse = new Subject<any>();
  currebtMessage = this.messageSourse.asObservable();


  addToCart(productKey:string){
    console.log('addcartMethod.', productKey);
    // this.pr.subscribe(data =>{
    //   console.log('fewfwef')
    // });
    this.messageSourse.next(productKey);
  }

  clearCart(){
    this.messageSourse.next();
  }

  getCart(){
    console.log('cart Service');
    // this.pr.subscribe(data => {
    //   console.log(data);
    // });

  }

  constructor() { }
}
