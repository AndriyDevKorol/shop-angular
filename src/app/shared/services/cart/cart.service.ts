import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/Product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private addToCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  addToCartEvent = this.addToCart.asObservable();
  products: Product[] = [];

  constructor(
    private productService: ProductService,
  ) { }

  // onClearCart(){
  //   this.productService.clearCart();
  // }

  // onDelete(key){

  // }
}
