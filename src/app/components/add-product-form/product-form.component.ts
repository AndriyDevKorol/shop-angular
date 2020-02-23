import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Product } from '../../modules/Product';
import { NgForm, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})

export class ProductFormComponent implements OnInit {

  @Input()
  @Output() onAddNewProduct: EventEmitter<Product> = new EventEmitter

  formData: Product = {
    title: 'a title',
    price: 2,
    body: 'some text',
  };

  constructor(
    private poroductService: ProductService,
    private firestore: AngularFirestore,
    private router: Router,
    private afauth: AngularFireAuth,
  ) { }

  ngOnInit() {
  }


  onAddProduct (form:NgForm){
    const NewProduct: Product = {
      title: this.formData.title,
      price: this.formData.price,
      body: this.formData.body
    }

    if(this.afauth.auth.currentUser){
      this.poroductService.addProduct(NewProduct);
    }else{
      alert("You are not logged. Plaes log in!");
      this.router.navigate(['/login']);
    }



      // for firecloud
    // this.firestore.collection('products').add(NewProduct);
   }

   updateProduct(key, form:NgForm){
    const NewProduct: Product = {
      title: this.formData.title,
      price: this.formData.price,
      body: this.formData.body
    }
      this.poroductService.updateProduct(key, NewProduct);
   }
}
