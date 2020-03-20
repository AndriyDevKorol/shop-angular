import { Component, Input, Output, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { EventEmitter } from '@angular/core';
import { ProductService } from "../../../shared/services/product/product.service";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;
  // @Output('') deleteProduct: EventEmitter<string> = new EventEmitter();
  // @Output('') editProduct: EventEmitter<string> = new EventEmitter();
  // private detailsProduct: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  // detailProductEvent = this.detailsProduct.asObservable();
  editProductKey: string;
  isAdmin = true;
  products: Product[];


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(){
    this.editEventListener();

  }

  addToCart(product:Product):void{
    console.log('to cart', product)
    this.productService.emitAddToCart(product);
  }

  onDelete($key: string):void{
    this.productService.onDelete(this.product.$key);
  }

  onEdit(product:Product[]):void{
     this.productService.emitEditProduct(product);
  }

  onReset():void{
     this.productService.emitEditProduct([]);
  }

  editEventListener(){
    this.productService.editProductEvent.subscribe((product: any) => {
      if(product.$key === this.product.$key) {
        this.editProductKey = product.$key;
      }else{
        this.editProductKey = ''
      }
    })
  }

  onDetailsProduct(product: Product){
    this.productService.emitDetailProduct(product);
  }

  // emitDetailProduct(product: Product[]){
  //   this.detailsProduct.next(product);
  // }
}
