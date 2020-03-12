import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
// import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnInit, OnDestroy {

private submissionForm: AngularFirestoreCollection<any>;
editProductKey: string;
subscription: Subscription;
products: Product[] = [];
cartEventSubscription: Subscription;
pr:any[]=[];
title = 'project';
ourForm: FormGroup;
submitting = false;
submitted = false;


product: Product = {
  $key:'',
  title: '',
  price: 0,
  body: '',
};
  isValidURL: any;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(){
     this.cartEventSubscription = this.productService.addToCartEvent.subscribe((products: Product[]) => {
        this.products = products;
      })
      this.submissionForm = this.firestore.collection('submissions');
      this.ourForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        email_body: ['', Validators.required]
      });
  }

  clearCart(){
    this.productService.clearCart();
  }

  ngOnDestroy(): void {
    this.cartEventSubscription.unsubscribe();
  }

  submitData(value: any) {
    // console.log(this.submitted);

    this.submitting = true;
    this.submissionForm.add(value).then(res => {
      this.submitted = true;
    }).catch(err => console.log(err)
    ).finally(() => {
      this.submitting = false;
    });
  }
}
