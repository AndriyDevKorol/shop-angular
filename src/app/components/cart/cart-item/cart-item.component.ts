import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {

  @Input('product') product: Product;

  constructor() { }

  ngOnInit() {

  }

}
