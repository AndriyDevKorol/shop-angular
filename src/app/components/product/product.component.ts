import { Component, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { EventEmitter } from '@angular/core';
import { ProductService } from "../../shared/services/product/product.service";
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;
  @Output('') deleteProduct: EventEmitter<string> = new EventEmitter();
  @Output('') editProduct: EventEmitter<string> = new EventEmitter();
  editProductKey: string;
  isAdmin = true;


  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(){
    this.editEventListener();
    this.addToCartListener();
  }

  addToCart(product:Product):void{
    console.log('pr component')
    this.cartService.emitAddToCart(product);
    console.log('pr com', product)
  }

  onDelete($key: string):void{
    this.productService.onDelete(this.product.$key);
  }

  onEdit(product:Product):void{
     this.productService.emitEditProduct(product);
  }

  onReset():void{
     this.productService.emitEditProduct({});
  }

  editEventListener(){
    this.productService.editProductEvent.subscribe((product: Product) => {
      if(product.$key === this.product.$key) {
        this.editProductKey = product.$key;
      }else{
        this.editProductKey = ''
      }
    })
  }

  addToCartListener(){
    this.cartService.addToCartEvent.subscribe((product: Product) => {
      if(product.$key){
        this.editProductKey = product.$key;
      }else{
        this.editProductKey = ''
      }
    })
  }
}
