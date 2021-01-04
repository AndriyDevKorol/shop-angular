import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subject, Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductModel } from 'src/app/models/product.model';
import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailSenderService } from 'src/app/core/services/emailSender/email-sender.service';
import { MessageService } from 'src/app/core/services/messages/message.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit, OnDestroy {

  @Input()product: Product;
  products:ProductModel[] = [];
  unsubscribe$ = new Subject();
  total: number;
  count: number;
  countVal: number;
  ourForm: FormGroup;

  constructor(
    private cartService: CartService,
    private emailSender: EmailSenderService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.cartService.addCartProductsEvent.pipe(takeUntil(this.unsubscribe$)).subscribe(data => {
     let tot;
      this.products = data;
      tot = tot + this.products.map(res => {

        res.price * res.count

      })
      console.log('fdf', tot)
    });

    this.ourForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl(''),
      email: new FormControl(''),
      comment: new FormControl('')
    });
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
    this.emailSender.sendMessage(completeRecipe, name).subscribe(
      res => this.messageService.successMessage('Замовленя успішнов відправлено ' + res),
      error => this.messageService.errorMessage(error));
    alert('Email was sent');
    // this.isShow = !this.isShow;
  }


  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
