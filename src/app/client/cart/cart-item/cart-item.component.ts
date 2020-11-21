import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from 'src/app/shared/services/product/product.service';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('product')
  product: Product;
  products: Product[];


  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // tslint:disable-next-line:no-unused-expression
    this.products;
  }

  deleteItem(item): void {
    this.productService.deleteCart(item);
  }

  onDetailsProduct(product: Product) {
    this.productService.emitDetailProduct(product);
  }

  onCount(counter: number) {
    let prCount = this.product.count;
    prCount = prCount + counter;
    if (prCount < 0) {
      prCount = 0;
    }
  }
}
