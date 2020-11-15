import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.less']
})
export class LeftSectionComponent implements OnInit {
  @Input() products$: ProductModel[];
  products: ProductModel[];

  categories: string[];
  category: string;

  constructor(
    private categoryService: ProductFilterService,
  ) { }

  ngOnInit() {
    console.log('prod', this.products);
    console.log('prod2', this.products$);

    // this.categoryService.categoryListEvent.subscribe(res => {this.categoriess
  }

   getCategory(category: string) {
     this.categoryService.getSelectedCategoryListener(category);
   }

}
