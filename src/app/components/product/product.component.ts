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
    this.productService.editProductEvent.subscribe((product: Product) => {
      if(product.$key === this.product.$key) {
        this.editProductKey = product.$key;
      }else{
        this.editProductKey = ''
      }
    })
  }

  addToCart($key:string):void{
    this.cartService.addToCart($key);
  }

  onDelete($key: string){
    this.productService.onDelete(this.product.$key);
  }

  onEdit(product:Product){
     this.productService.emitEditProduct(product);
  }

  onReset(){
     this.productService.emitEditProduct({});
  }
}
