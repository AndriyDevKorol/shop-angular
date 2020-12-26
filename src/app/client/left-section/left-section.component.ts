import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.less']
})
export class LeftSectionComponent implements OnInit, OnDestroy {
  @Input() products$: ProductModel[];
  products: ProductModel[];
  unsubscribe$ = new Subject();

  categories: string[];
  category: string;

  constructor(
    private categoryService: ProductFilterService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

   getCategory(category: string) {
     this.categoryService.getSelectedCategoryListener(category);
   }

   getProducts(){
    this.productService.getProducts()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      this.products = res.slice(0, 4);
    });
  }

   ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
