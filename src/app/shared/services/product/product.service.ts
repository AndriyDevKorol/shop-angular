import { Injectable} from '@angular/core';
import { Product } from '../../modules/Product';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import * as firebase from "firebase/app";
import { AngularFireAuth } from 'angularfire2/auth';
import { ProductsUrl } from '../../../core/productsUrl';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = ProductsUrl.productsUrl;
  products: AngularFireList<Product> = null;
  productDoc: AngularFirestoreDocument<Product>;
  private editeProduct: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  editProductEvent = this.editeProduct.asObservable();
  private addToCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  addToCartEvent = this.addToCart.asObservable();
  private detailsProduct: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  detailProductEvent = this.detailsProduct.asObservable();
  private deleteFromCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  deleteFromCartEvent = this.deleteFromCart.asObservable();
  cartProducts: Product[] = [];
  productDetails: any;
  database = firebase.database();
  product: Product[] = [];


  constructor(
    public db: AngularFireDatabase,
    private afauth: AngularFireAuth,
  ) {
        this.products = db.list(this.productsUrl);
    }


  getProducts() {
     return this.products;
  }

  loadProducts() {
    return this.db
    .list<Product>('products', (ref) => ref.orderByChild('date'))
      .valueChanges()
      .pipe(map((arr) => arr.reverse()));
  }


  addProduct(product: Product): void {
     this.db.list(this.productsUrl).push(product);
  };

  onDelete(key: string ) {
    return this.products.remove(key);
  };

  updateProduct(key: string, val) {
    return this.products.update(key, val);
  }

  emitEditProduct(product: Product) {
    this.product.push(product);
    this.editeProduct.next(this.product);
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


