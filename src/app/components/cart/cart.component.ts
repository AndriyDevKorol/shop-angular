import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/modules/Product';
import { CartService } from 'src/app/shared/services/cart/cart.service';
// import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})

export class CartComponent implements OnInit{

editProductKey: string;
subscription: Subscription;
products: any[];


product: Product = {
  $key:'',
  title: '',
  price: 0,
  body: '',
};

  constructor(
    private cartService: CartService,
  ) {}

  ngOnInit(){
     this.cartService.addToCartEvent.pipe().subscribe((product: Product) => {
        // product.count = 1;
        // products = []
        // products.map(()=>{

        //   products.push(...products, product);
        // })

        console.log(this.products);
      })

  //  this.cartService.addToCartEvent.subscribe((product: Product) => {
  //   // product.count = 1;
  //   // this.product = product;
  //   // let products = [];
  //   // products.push(product, ...products);
  //   this.products.push(product, ...this.products);
  //   // products.push(product, ...products);
  //   // this.products.push(...this.products, product);

  //   if(localStorage.getItem('cart') == null){
  //     let cart = this.products;
  //     cart.push(JSON.stringify(product));
  //     localStorage.setItem('cart', JSON.stringify(product));
  //   }

  //   return this.products;
  // })

  //   // console.log('cart', this.cartService.getCart());
  //  this.cartService.currebtMessage.subscribe(key =>{
  //    console.log('cart -', this.key);
  //    this.key = key
  //   });
  //  console.log('cart -key', this.key);

  }



  // ngOnDestroy(){
  //   console.log("onDestroy")
  //   this.subscription.unsubscribe();
  //   // this.cart = this.cartService.getCart();
  //   // console.log('cart', this.cart);
  // }

  clearCart():void{
    this.cartService.clearCart();
  }

}
