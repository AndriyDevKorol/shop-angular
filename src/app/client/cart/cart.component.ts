import { Component, OnDestroy, OnInit} from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from 'src/app/core/services/product.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EmailSenderService } from '../../core/services/emailSender/email-sender.service';
import { ProductModel } from 'src/app/models/product.model';
import { Subject } from 'rxjs/internal/Subject';
import { map, takeUntil } from 'rxjs/operators';
import { StorageCartModel } from 'src/app/models/storage.model';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnInit, OnDestroy {
  storageData:StorageCartModel[];
  editProductKey: string;
  cartEventSubscription: Subscription;
  products:ProductModel[] = [];
  ourForm: FormGroup;
  submitting = false;
  submitted = false;
  total = 0;
  recipe: any[];
  isValidURL: any;
  isShow: boolean;
  unsubscribe$ = new Subject();
  newItem;
  countVal: number;

  product: Product = {
    $key: '',
    title: '',
    price: 0,
    body: '',
    category: '',
    shortDescription: ''
  };

  name = new FormControl('', [Validators.required]);

  constructor(
    private productService: ProductService,
    private emailSender: EmailSenderService,
    private cartService: CartService
  ) {}

  ngOnInit() {

    // this.isShow = false;
    this.cartService.addCartProductsEvent.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {this.products = data;});



    this.ourForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      email: new FormControl(''),
      comment: new FormControl('')
    });
  }

  getItems() {
    if (this.products){
      return this.storageData
      .forEach(res => this.productService.getProduct(res)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        res => { {
          res.count = 1;
          this.products.push(res);
       }}
      ));
    }

    return this.products
    .forEach(res => { {
          if(res.$key = this.newItem.$key){return}
          this.products.push(this.newItem);
       }}
      );
  }

  clearCart() {
    this.products = [];
    this.cartService.addCartProducts(this.products);
  }

  deleteItem(productId: string){
    if(productId){
      this.products = this.products.filter(item => item.$key != productId);
      this.cartService.addCartProducts(this.products);
    }
  }

  showRecipe() {
    this.isShow = !this.isShow;
  }

  hideRecipe() {
    this.isShow = !this.isShow;
  }

  onCount() {
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

   submitData() {
    const value = this.ourForm.value;
    const {email} = value;
    const {name} = value;
    const {phone} = value;
    const {comment} = value;
    let k = '';

    const gridHeader = `
  <table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
   <tbody><tr>
       <td height="10" style="font-size:10px; line-height:10px;"> </td> <!-- Spacer -->
   </tr>
   <tr>
       <td align="center">

           <!-- Start Container  -->
           <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
               <tbody><tr>
                   <td width="200" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                   ${name}
                   </td>
                   <td width="200" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                   ${email}
                   </td>
                   <td width="200" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                   ${phone}
                   </td>
               </tr>
           </tbody></table>
           <!-- Start Container  -->
       </td>
   </tr>
   <tr>
       <td height="10" style="font-size:10px; line-height:10px;"> </td> <!-- Spacer -->
   </tr>
</tbody></table>

<table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
<tbody><tr>
    <td height="10" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
</tr>
<tr>
    <td align="center">

        <!-- Start Container  -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
            <tbody><tr>
                <td width="400" class="mobile" style="font-size:12px; line-height:18px;">
                   Побажання: ${comment}
                </td>

                <td width="200" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                    Занальна сума: ${this.total} грн
                </td>
            </tr>
        </tbody></table>
        <!-- Start Container  -->

    </td>
</tr>
<tr>
    <td height="10" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
</tr>
</tbody></table>

<table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
  <tbody><tr>
      <td height="10" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
  </tr>
  <tr>
      <td align="center">
          <!-- Start Container  -->
          <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
              <tbody><tr>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                  Назва
                  </td>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                  грн/шт
                  </td>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                  К-сть
                  </td>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px; font-weight: bold;">
                  Сума
                  </td>
              </tr>
          </tbody></table>
          <!-- Start Container  -->

      </td>
  </tr>
  <tr>
      <td height="10" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
  </tr>
</tbody></table>
  `;

    this.products.forEach(product => {
      k += `
      <table width="640" cellpadding="0" cellspacing="0" border="0" class="wrapper" bgcolor="#FFFFFF">
  <tbody><tr>
      <td height="10" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
  </tr>
  <tr>
      <td align="center">
          <!-- Start Container  -->
          <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
              <tbody><tr>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px;">
                  ${product.title}
                  </td>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px;">
                  ${product.price}
                  </td>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px;">
                  ${product.count}
                  </td>
                  <td width="150" class="mobile" style="font-size:12px; line-height:18px;">
                  ${product.count * product.price}
                  </td>
              </tr>
          </tbody></table>
          <!-- Start Container  -->

      </td>
  </tr>
  <tr>
      <td height="10" style="font-size:10px; line-height:10px;"> </td><!-- Spacer -->
  </tr>
</tbody></table>`;
    });

    const completeRecipe = gridHeader + k;
    this.emailSender.sendMessage(completeRecipe, name).subscribe(res => console.log(res));
    alert('Email was sent');
    this.isShow = !this.isShow;
  }
}
