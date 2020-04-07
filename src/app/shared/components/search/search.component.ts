import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../modules/Product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  // @Input('product') product: Product;


  constructor() { }

  ngOnInit() {
  }

}
