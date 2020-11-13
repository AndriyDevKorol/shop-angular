import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  categories$: ProductModel[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(res => {
      this.categories$ = res
    });
  }

  // getCategory(category: string) {
  //   this.categoryService.getSelectedCategoryListener(category);
  // }

}
