import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/Product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private categoryList: BehaviorSubject<string[]> = new BehaviorSubject([]);
  categoryListEvent = this.categoryList.asObservable();
  private selectedCategory: BehaviorSubject<string> = new BehaviorSubject('');
  selectedCategoryEvent = this.selectedCategory.asObservable();

  constructor(
    public productService: ProductService,
  ) { }


  getCategory(products:Product[], category: string) {
    if (!category) { return products;}
    return products.filter(e => e.category == category);
  }

  getCategoryList(categoryList: string[]) {
    this.categoryList.next(categoryList);
  }

  getSelectedCategory(category: string) {
    this.selectedCategory.next(category);
    console.log('nav-bar', category);
  }

}
