import { Component, OnInit, Inject} from '@angular/core';
import { Product } from '../../shared/modules/Product';
import { NgForm } from '@angular/forms';
import { ProductService } from '../../shared/services/product/product.service';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})

export class ProductFormComponent implements OnInit {

  public ccclass = { 'btn-color': true };
  productKey: string;
  isAdmin = this.afauth.auth.currentUser;
  selectedImage: any = null;

  formData: Product = {
    $key: '',
    title: '',
    price: 0,
    body: '',
    category: '',
    shortDescription: '',
  };


  constructor(
    private productService: ProductService,
    // private firestore: AngularFirestore,
    private router: Router,
    private afauth: AngularFireAuth,
    // private storage: AngularFireStorage,
    // private fileService: FileService

  ) { }

  ngOnInit() {
  console.log('isAdmin', this.isAdmin);
  // this.fileService.getImageDetailList();
  this.productService.editProductEvent.subscribe((product: any) => {
      this.formData = product;
    });
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    }
  // save() {
  //     const name = this.selectedImage.name;
  //     const fileRef = this.storage.ref(name);
  //     this.storage.upload(name, this.selectedImage)
  //     .snapshotChanges().pipe(
  //       // finalize(() => {
  //       //   fileRef.getDownloadURL().subscribe((url) => {
  //       //     this.url = url;
  //       //     this.fileService.insertImageDetails(this.id,this.url);
  //       //     alert('Upload Successful');
  //       //   });
  //       // })
  //     ).subscribe();
  //   }
  // view(){
  //   this.fileService.getImage(this.file);
  // }

  onAddProduct(form: NgForm) {
    const NewProduct: Product = {
      title: this.formData.title,
      price: this.formData.price,
      body: this.formData.body,
      category: this.formData.category,
      shortDescription: this.formData.shortDescription
    };
    if (this.isAdmin) {
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
      body: this.formData.body,
      category: this.formData.category,
      shortDescription: this.formData.shortDescription
    };

    const key: string = this.formData.$key;
    this.productService.updateProduct(key, data);
   }

  //  upload(event) {
  //   // create a random id
  //   const randomId = Math.random().toString(36).substring(2);
  //   // create a reference to the storage bucket location
  //   this.ref = this.afStorage.ref(randomId);
  //   // the put method creates an AngularFireUploadTask
  //   // and kicks off the upload
  //   this.ref.put(event.target.files[0]);
  // }

   onReset() {
    this.productService.emitEditProduct([]);
   }
}
