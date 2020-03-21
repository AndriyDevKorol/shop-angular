import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from "../../../shared/services/product/product.service";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input('product') product: Product;
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
}
