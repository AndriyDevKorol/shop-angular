import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { ShareDataService } from '../../services/shareData.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { CartService } from '../../services/cart.service';
import { MessageService } from '../../services/messages/message.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: ProductModel;
  products$: ProductModel[];
  unsubscribe$ = new Subject();
  searchTerm: string;
  selectedCategory: string;
  isAdmin = this.afauth.auth.currentUser;
  countVal:number = 1;
  editProductKey: string;
  productId: any;
  storageValue = [];
  cartProducts:ProductModel[];

  private subscription: Subscription;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService,
    private afauth: AngularFireAuth,
    private cartService: CartService,
    private messageService: MessageService
  ) {
    // router.events.subscribe(console.log);
  }

  ngOnInit() {
    this.productId = this.product.$key;
    this.subscription = this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe(params=>this.productId=params['id']);
    this.cartService.addCartProductsEvent.pipe(takeUntil(this.unsubscribe$)).subscribe(data => this.cartProducts = data);
  }


  getProductOfCategory(selectedCategory: string){
    this.productService.getProductByCategory(selectedCategory).pipe(takeUntil(this.unsubscribe$));
  }

  onDelete(product: ProductModel): void {
    this.productService.deleteProduct(product)
    .then(() => {
      this.messageService.successMessage('Продукт - ' + product.title + ' успішно видалено');
    })
    .catch((error) => {
      this.messageService.errorMessage(error);
    });;
  }

  onEdit(product: ProductModel): void {
    //  this.productService.emitEditProduct(product);
  }

  onCount() {
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }


  addToCart(data: ProductModel) {
    let exist = this.cartProducts.some(item => item.$key == data.$key);
    if(exist){
      this.messageService.infoMessage('Продукт - ' + data.title + ' вже доданий в корзину');
      return;
    }
    data.count = this.countVal;
    this.cartProducts.push(data);
    this.cartService.addCartProducts(this.cartProducts);
    this.messageService.successMessage('Продукт - ' + data.title + ' успішно додано в корзину');
  }

  onReset(){}

  onDetailsProduct(product: ProductModel) {
    // this.productService.emitDetailProduct(product);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
