import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.less']
})
export class ProductWidgetComponent implements OnInit {
  product: Product;
  products: Product[];

  constructor(public productService: ProductService,) { }

  ngOnInit() {
    this.productService.getProducts().valueChanges().subscribe(e => {
      let rendomValue = Math.random();
      this.products = e.slice(0,4)
    });
  }

}
