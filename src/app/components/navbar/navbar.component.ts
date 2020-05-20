import { Component, OnInit } from '@angular/core';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  categories: string[];
  category: string;

  constructor(
    private categoryService: ProductFilterService,
  ) { }

  ngOnInit() {
   this.categoryService.categoryListEvent.subscribe(res => {this.categories = res});
   this.categoryService.selectedCategoryEvent.subscribe(res => {this.category = res
    console.log('2ss', res)
  });
  }

  getCategory(category: string) {
    this.categoryService.getSelectedCategoryListener(category);
  }
}
