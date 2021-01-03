import { Component, Input, OnInit } from '@angular/core';
import { combineAll } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ShareDataService } from 'src/app/core/services/shareData.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  @Input() products$: ProductModel[];
  categories: string[] = [];


  constructor(
    private shareDataService: ShareDataService,
    private productService: ProductService
    ) { }

  ngOnInit() {
      this.productService.getProducts().forEach(res => {
        this.products$ = res;
        this.products$.forEach(res => {
          this.categories.push(res.category);
          this.categories = [...new Set(this.categories)];
        })
     })
  }

  getValue(category: string){
    this.shareDataService.getProductsOfCategory(category);
  }
}
