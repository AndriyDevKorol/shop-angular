import { Injectable } from '@angular/core';
import { Product } from "../../modules/Product";
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
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
}
