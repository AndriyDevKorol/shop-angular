import { Injectable } from '@angular/core';
import { Product } from "../../modules/Product";
import {AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: AngularFireList<Product[]> = null;
  private dbPath = '/products';
  productDoc: AngularFirestoreDocument<Product>;

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
    console.log('servise ', key );
    return this.products.remove(key);
  }

  updateProduct(key:string, val:any){
    return this.products.update(key, val);
  }
}
