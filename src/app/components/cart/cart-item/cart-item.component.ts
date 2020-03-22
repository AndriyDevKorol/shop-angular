import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from 'src/app/shared/services/product/product.service';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {

  @Input('product') product: Product[];
  products: Product[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.products;
  }
  deleteItem(key):void{
    this.productService.deleteCart(key);
  }

  onDetailsProduct(product){
    this.productService.emitDetailProduct(product);
  }
}
