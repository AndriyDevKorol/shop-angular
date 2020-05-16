import { Component, OnInit } from '@angular/core';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
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
