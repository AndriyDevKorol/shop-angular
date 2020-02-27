import { Component, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/Product';
import { EventEmitter } from '@angular/core';
import { ProductService } from "../../services/product/product.service";
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;
  @Output('') deleteProduct: EventEmitter<string> = new EventEmitter();
  @Output('') editProduct: EventEmitter<string> = new EventEmitter();

  isAdmin = true;


  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(){

  }


  addToCart($key:string):void{
    this.cartService.addToCart($key);
  }

  clearCart():void{
    this.cartService.clearCart();
  }

  getProduct(){
    this.productService.getProducts().snapshotChanges();
  }

  onDelete($key: string){
    console.log('deleted on productComponent ', $key);
    console.log($key);
    this.productService.onDelete(this.product.$key);
  }

  onEdit($key:string){
    console.log('edit on productComponent ', $key);
    //  this.editProduct.emit(key);
    //  this.productService.updateProduct(key);
  }

}
