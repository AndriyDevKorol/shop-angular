import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { EmailSenderService } from 'src/app/shared/services/emailSender/email-sender.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnInit, OnDestroy {

private submissionForm: AngularFirestoreCollection<any>;
editProductKey: string;
subscription: Subscription;
cartEventSubscription: Subscription;
products: Product[] = [];
ourForm: FormGroup;
submitting = false;
submitted = false;
total = 0;
recipe: any[];


product: Product = {
  $key: '',
  title: '',
  price: 0,
  body: '',
  category: '',
  shortDescription: ''
};

  isValidURL: any;
  isShow: boolean;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private emailSender: EmailSenderService,
  ) {}

  ngOnInit() {
    this.isShow = false;
    this.cartEventSubscription = this.productService.addToCartEvent.subscribe((products: Product[]) => {
      this.products = products;
      console.log('tt - ', this.total);
      this.recipe = this.products.map(pr => this.total = (pr.count * pr.price) + this.total);
      });
      // this.submissionForm = this.firestore.collection('submissions');
      // this.ourForm = this.fb.group({
      //   email: ['', [Validators.required, Validators.email]],
      //   subject: ['', Validators.required],
      //   email_body: ['', Validators.required]
      // });
  }

  clearCart() {
    this.productService.clearCart();
    this.total = 0;
  }

  showRecipe() {
    this.isShow = !this.isShow;
  }

  hideRecipe() {
    this.isShow = !this.isShow;
  }


  ngOnDestroy(): void {
    this.cartEventSubscription.unsubscribe();
  }

  submitData(form: NgForm) {
    // const value = form.value;
    // const name = value.name;
    // const email = value.email;
    // const message = value.content;
    // const subject = value.subject;
    // tslint:disable-next-line:new-parens


const value1 = [this.products.map(pr => pr.title), this.products.map(pr => pr.count), this.products];

    // let formRequest = { name, email, subject, message};

const commonPost = {
      personalizations: [{
        to: [{
          email: 'edsdvgsd@mailinator.com',
          name: 'John Doe'
        }, {
          email: 'andriykorol@yahoo.com',
          name: '@@@ Doe'}],
        subject: 'TESTwqgggHello, World! fewefewf'
      }],
      content: [{
        type: 'text/html',
        value: '<html><body><h1> kew Hello, World!</h1></body></html>'
      }],
      from:{
        email: 'napuwunapuwu@gmail.com',
        name: 'TEST Smith'}
      };
console.log('recipe', JSON.stringify(this.products.map(pr => pr.title)));
console.log('recipe', JSON.stringify(value1));
// this.emailSender.sendMessage(commonPost).subscribe(res => console.log(res));
alert('Email was sent');
    // form.reset();
this.isShow = !this.isShow;
  }
}
