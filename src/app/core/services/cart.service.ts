import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ProductModel } from "src/app/models/product.model";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSourse = new BehaviorSubject<[]>([]);
  addCartProductsEvent = this.cartSourse.asObservable();

  constructor() {}

  addCartProducts(data:any){
    console.log('service', data);
    this.cartSourse.next(data);
  }

}
