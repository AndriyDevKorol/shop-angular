import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.less']
})
export class HomeContentComponent implements OnInit {
  product: Product;
  products: Product[];
  constructor() { }

  ngOnInit() {
  }

}
