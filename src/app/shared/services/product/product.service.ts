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
  productDetails: Product[] = [];
  fileList: any[];
  imageDetailList: AngularFireList<any>;



  constructor(
    public db: AngularFireDatabase,
    @Inject(AngularFireDatabase) private firebase: AngularFireDatabase
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

  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageDetails');
    }

  getImage(value: any) {
    this.imageDetailList.snapshotChanges().subscribe(
    list => {
      this.fileList = list.map(item => item.payload.val());
     }
    );
  }


  // showPreview(event: any) {
  //   this.selectedImage = event.target.files[0];
  //   }
  //   save() {
  //     var name = this.selectedImage.name;
  //     const fileRef = this.storage.ref(name);
  //     this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
  //       finalize(() => {
  //         fileRef.getDownloadURL().subscribe((url) => {
  //           this.url = url;
  //           this.fileService.insertImageDetails(this.id,this.url);
  //           alert('Upload Successful');
  //         })
  //         })
  //       ).subscribe();
  //     }
  //     view() {
  //     this.fileService.getImage(this.file);
  //   }

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

  deleteCart(key: string) {
    console.log('key', key);
    console.log('enter', this.cartProducts);

    // tslint:disable-next-line:no-unused-expression
    this.cartProducts = this.cartProducts.filter(item => { item.$key !== key; });

    console.log('out', this.cartProducts);
    this.addToCart.next(this.cartProducts);
  }
}
