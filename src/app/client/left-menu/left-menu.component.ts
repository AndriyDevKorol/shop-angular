import { Component, Input, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  @Input() products$: ProductModel[];
  key:any;

  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit() {
    if(this.key){
      console.log('ls', localStorage.getItem(this.key))
    }
    console.log('ls', localStorage.getItem)

  }

  getProductOfCategory(){
    this.productService.getProductByCategory('Мішок');
    console.log(this.productService.getProductByCategory('Мішок'));
    let key = 'Item 1';
localStorage.setItem(key, 'Value');

  }
}
