import { Injectable, Inject } from '@angular/core';
import { Product } from '../../modules/Product';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
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
  private deleteFromCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  deleteFromCartEvent = this.deleteFromCart.asObservable();
  count: number;
  cartProducts: Product[] = [];
  productDetails: any;


  constructor(
    public db: AngularFireDatabase
  ) {
        this.products = db.list(this.dbPath);
    }

  getProducts() {

     return this.products;
  }

  addProduct(product: Product): void {
     this.db.list(this.dbPath).push(product);
  }

  onDelete(key: string ) {
    return this.products.remove(key);
  }

  updateProduct(key: string, val) {
    return this.products.update(key, val);
  }

  emitEditProduct(product: Product[]) {
    this.editeProduct.next(product);
  }

  emitDetailProduct(product: Product) {
    this.productDetails = [];
    this.productDetails.push(product);
    this.detailsProduct.next(this.productDetails);
  }

  emitAddToCart(product: Product) {

    const exist = this.cartProducts.includes(product);
    if (!exist) {
      this.cartProducts.push(product);
      this.addToCart.next(this.cartProducts);
    } else { return exist; }
  }

  clearCart() {
    this.cartProducts = [];
    this.addToCart.next(this.cartProducts);
  }

  deleteCart(prKey: string) {
    this.cartProducts = this.cartProducts.filter(item => {
      return item.$key !== prKey;
    });
    this.addToCart.next(this.cartProducts);
  }
}


