import { Component, OnInit, Inject} from '@angular/core';
import { Product } from '../../shared/modules/Product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../shared/services/product/product.service';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseStoreService } from 'src/app/shared/services/firebaseStore/firebase-store.service';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})

export class ProductFormComponent implements OnInit {

  public ccclass = { 'btn-color': true };
  isAdmin = this.afauth.auth.currentUser;
  selectedImage: any = null;
  url: string;
  id: string;
  file: string;
  pr: Product[];

  formData: Product = {
    $key: '',
    title: '',
    price: 0,
    imgUrl: '',
    body: '',
    category: '',
    subCategory: '',
    shortDescription: '',
  };


  constructor(
    @Inject(AngularFireStorage) private storage: AngularFireStorage,
    @Inject(FirebaseStoreService) private firebaseStoraService: FirebaseStoreService,
    private productService: ProductService,
    private router: Router,
    private afauth: AngularFireAuth
  ) { }

  ngOnInit() {
    // this.firebaseStoraService.getImageDetailList();
    this.productService.editProductEvent.subscribe((product: any) => {
      this.formData = product;
    });
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    }

  saveImg() {
    const name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          // this.firebaseStoraService.insertImageDetails(this.id, this.url);
          alert('Upload Successful');
        });
      })
    ).subscribe();
  }

  deleteImg() {
    console.log('imgurl', this.url);
    console.log(this.storage.ref(this.url).delete());
    this.storage.ref(this.selectedImage).delete();
  }

  onAddProduct(form: NgForm) {
    const NewProduct: Product = {
      title: this.formData.title,
      price: this.formData.price,
      imgUrl: this.url,
      body: this.formData.body,
      category: this.formData.category,
      subCategory: this.formData.subCategory,
      shortDescription: this.formData.shortDescription
    };

    if (this.isAdmin) {
      console.log('fdf', this.url);
      // this.saveImg();

      this.productService.addProduct(NewProduct);
      this.onReset();
    } else {
      alert('You are not logged. Plaes log in!');
      this.router.navigate(['/login']);
    }

      // for firecloud
    // this.firestore.collection('products').add(NewProduct);
   }

   updateProduct(form: NgForm) {
    const data = {
      title: this.formData.title,
      price: this.formData.price,
      imgUrl: this.url,
      body: this.formData.body,
      category: this.formData.category,
      subCategory: this.formData.subCategory,
      shortDescription: this.formData.shortDescription
    };

    const key: string = this.formData.$key;
    this.productService.updateProduct(key, data);
   }

   onReset() {
    this.productService.emitEditProduct([]);
   }

  view() {
  console.log(this.id);
  console.log(this.firebaseStoraService.getImageDetailList());

  this.firebaseStoraService.getImage(this.file);
  }
}
