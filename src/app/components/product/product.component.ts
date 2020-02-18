import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/modules/Product';
import { EventEmitter } from '@angular/core';
import { ProductService } from "../../services/product/product.service";

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
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.productService.getProducts().snapshotChanges();
  }

  onDelete(price: string){
    console.log('deleted on productComponent ', price);
    console.log(this.product.key);
    this.productService.onDelete(this.product.body);
  }

  onEdit(key:string){
     this.editProduct.emit(key);
    //  this.productService.updateProduct(key);
  }
}
