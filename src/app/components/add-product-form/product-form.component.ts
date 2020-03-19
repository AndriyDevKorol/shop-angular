import { Component, OnInit} from '@angular/core';
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

  // @Output() onAddNewProduct: EventEmitter<Product> = new EventEmitter

  public ccclass={"btn-color": true};
  productKey: string;
  admin = this.afauth.auth.currentUser;


  formData: Product = {
    $key:'',
    title: '',
    price: 0,
    body: '',
    category:'',
    shortDescription:'',
  };

  constructor(
    private productService: ProductService,
    // private firestore: AngularFirestore,
    private router: Router,
    private afauth: AngularFireAuth

  ) { }

  ngOnInit() {
console.log('isAdmin',this.admin);
    this.productService.editProductEvent.subscribe((product:any) => {
      this.formData = product;
    })
  }

  onAddProduct (form:NgForm){
    const NewProduct: Product = {
      title: this.formData.title,
      price: this.formData.price,
      body: this.formData.body,
      category: this.formData.category,
      shortDescription: this.formData.shortDescription
    }
    if(this.admin){
      this.productService.addProduct(NewProduct);
      this.onReset();
    }else{
      alert("You are not logged. Plaes log in!");
      this.router.navigate(['/login']);
    }

      // for firecloud
    // this.firestore.collection('products').add(NewProduct);
   }

   updateProduct(form:NgForm){
      this.productService.updateProduct(this.formData.$key, this.formData);
   }

   onReset(){
    this.productService.emitEditProduct([]);
   }
}
