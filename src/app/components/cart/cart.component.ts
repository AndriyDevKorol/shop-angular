import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
// import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { EmailSenderService } from 'src/app/shared/services/emailSender/email-sender.service';

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
  category: '',
};

  isValidURL: any;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private emailSender: EmailSenderService,
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

  submitData(form: NgForm){
    // const value = form.value;
    // const name = value.name;
    // const email = value.email;
    // const message = value.content;
    // const subject = value.subject;



    // let formRequest = { name, email, subject, message};

    let commonPost = JSON.stringify({
      "personalizations":[{"to":[{"email":"edsdvgsd@mailinator.com","name":"John Doe"}, {"email":"andriykorol@yahoo.com","name":"@@@ Doe"}],
                "subject":"wqgggHello, World! fewefewf"}],
      "content": [{"type": "text/plain", "value": "Heya!"}],
      "from":{"email":"napuwunapuwu@gmail.com","name":"Sam Smith"}
      })

this.emailSender.sendMessage(commonPost).subscribe(res => console.log(res));
alert("Email was sent");
    // form.reset();
  }


}
