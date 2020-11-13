import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  categories$: ProductModel[];

  constructor(private productService: ProductService,) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.categories$ = res
    });
  }
}
