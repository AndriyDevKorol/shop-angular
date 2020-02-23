import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Product } from '../../modules/Product';
import { NgForm, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { resetFakeAsyncZone } from '@angular/core/testing';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})

export class ProductFormComponent implements OnInit {

  @Input()
  @Output() onAddNewProduct: EventEmitter<Product> = new EventEmitter

  public ccclass={"btn-color": true};

  formData: Product = {
    title: '',
    price: 0,
    body: '',
  };

  constructor(
    private poroductService: ProductService,
    private firestore: AngularFirestore,
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
    if(!this.afauth.auth.currentUser){
      alert("You are not logged. Please log in!");

    }else {
      this.poroductService.addProduct(NewProduct);
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
