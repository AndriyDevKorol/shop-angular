import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ShareDataService } from 'src/app/core/services/shareData.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
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
