import { Injectable } from '@angular/core';
import { Product } from "../../modules/Product";
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: AngularFireList<Product[]> = null;
  productDoc: AngularFirestoreDocument<Product>;
  private dbPath = '/products';
  private editeProduct: BehaviorSubject<Product> = new BehaviorSubject({});
  editProductEvent = this.editeProduct.asObservable();
  private addToCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  addToCartEvent = this.addToCart.asObservable();
  cartProducts: Product[] = [];


  constructor(
    public db: AngularFireDatabase,
  ) {
        this.products = db.list(this.dbPath);
    }

  getProducts() {
     return this.products;
  }

  addProduct(product: Product):void{
     this.db.list(this.dbPath).push(product);
  }

  onDelete(key: string ){
    return this.products.remove(key);
  }

  updateProduct(key:string, val:any){
    return this.products.update(val, undefined);
  }

  emitEditProduct(product: Product){
    this.editeProduct.next(product);
  }

  emitAddToCart(product: Product){
    console.log(product)
    this.cartProducts.push(product);
    this.addToCart.next(this.cartProducts);
  }
}
