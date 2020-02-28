import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestoreDocument } from 'angularfire2/firestore';

import { Product } from 'src/app/shared/modules/Product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  products: AngularFireList<Product[]> = null;
  private dbPath = '/products';
  productDoc: AngularFirestoreDocument<Product>;


  constructor(
    public db: AngularFireDatabase,
  ) {
    this.products = db.list(this.dbPath);
  }

  searchProducts() {
    console.log(this.products.valueChanges())
    return this.products.valueChanges();
    // .pipe(
    //   map(res => console.log('search service', value))
    //   // return this.getProducts = res["text"];
    // )

 }
}
