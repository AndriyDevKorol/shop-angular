import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  categories: string[];
  category: string;

  constructor(
    private categoryService: ProductFilterService,
  ) { }

  ngOnInit() {
    this.categoryService.categoryListEvent.subscribe(res => {this.categories = res});
    this.categoryService.selectedCategoryEvent.subscribe(res => {this.category = res});
   }

   getCategory(category: string) {
     this.categoryService.getSelectedCategoryListener(category);
   }

}
