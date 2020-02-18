import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from '../../modules/Product';
import { NgForm, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product/product.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { database } from 'firebase';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})

export class ProductFormComponent implements OnInit {

  @Output() onAddNewProduct: EventEmitter<Product> = new EventEmitter

  formData: Product = {
    key: '',
    title: 'a title',
    price: 2,
    body: 'some text',
  };

  constructor(
    private poroductService: ProductService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }


  onAddProduct (form:NgForm){
    const NewProduct: Product = {
      key: this.formData.key,
      title: this.formData.title,
      price: this.formData.price,
      body: this.formData.body
    }
    this.poroductService.addProduct(NewProduct)
      // .subscribe((data: Product) => {
      //   if(data.id) {
      //     this.onAddNewProduct.emit(data);
      //   }
      // });

      // firecloud
    // this.firestore.collection('products').add(NewProduct);
   }
}
