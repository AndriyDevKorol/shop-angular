import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  @Input() products$: ProductModel[];

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

  getProductOfCategory(){
    this.productService.getProductByCategory('Мішок');
    console.log(this.productService.getProductByCategory('Мішок'))
  }
}
