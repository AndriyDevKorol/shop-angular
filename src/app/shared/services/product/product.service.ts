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
  private editeProduct: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  editProductEvent = this.editeProduct.asObservable();
  private addToCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  addToCartEvent = this.addToCart.asObservable();
  private detailsProduct: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  detailProductEvent = this.detailsProduct.asObservable();
  cartProducts: Product[] = [];
  productDetails: Product[] = [];


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

  emitEditProduct(product: Product[]){
    this.editeProduct.next(product);
  }

  emitDetailProduct(product: Product){
    this.productDetails=[];
    this.productDetails.push(product);
    this.detailsProduct.next(this.productDetails);
  }

  emitAddToCart(product: Product){
    this.cartProducts.push(product);
    this.addToCart.next(this.cartProducts);
  }

  clearCart(){
    this.cartProducts = [];
    this.addToCart.next(this.cartProducts);
  }
}
