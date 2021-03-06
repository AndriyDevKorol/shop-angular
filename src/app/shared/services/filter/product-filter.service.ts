import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/Product';
import { ProductService } from '../product/product.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductFilterService {
  private categoryList: BehaviorSubject<string[]> = new BehaviorSubject([]);
  categoryListEvent = this.categoryList.asObservable();
  private selectedCategory: BehaviorSubject<string> = new BehaviorSubject('');
  selectedCategoryEvent = this.selectedCategory.asObservable();

  constructor(
    public productService: ProductService,
  ) { }


  getCategory(products:Product[], category: string): Product[] {
    if (!category) { return products}
    return products.filter(e => {
      e.category == category
    });
  }

  getCategoryListListener(categoryList: string[]) {
    this.categoryList.next(categoryList);
  }

  getSelectedCategoryListener(category: string) {
    this.selectedCategory.next(category);
  }

}
