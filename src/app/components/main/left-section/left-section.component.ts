import { Component, OnInit } from '@angular/core';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.less']
})
export class LeftSectionComponent implements OnInit {

  categories: string[];
  category: string;

  constructor(
    private categoryService: ProductFilterService,
  ) { }

  ngOnInit() {
    this.categoryService.categoryListEvent.subscribe(res => {this.categories = res});
    this.categoryService.selectedCategoryEvent.subscribe(res => {this.category = res});
  console.log('home');
  }

   getCategory(category: string) {
     this.categoryService.getSelectedCategoryListener(category);
   }

}
