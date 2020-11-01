import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.less']
})
export class ProductTileComponent implements OnInit {
  @Input() products: ProductModel[];

  constructor() { }

  ngOnInit() {
  }

  public addToCart(product){
    console.log(product);
  }
}
