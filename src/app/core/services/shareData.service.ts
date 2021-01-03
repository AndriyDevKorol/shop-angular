import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private selectedCategory = new BehaviorSubject<string>("");
  currentCategory = this.selectedCategory.asObservable();

  constructor() { }

  getProductsOfCategory(category: string){
    this.selectedCategory.next(category);
  }

  getUniqueCategories(products: ProductModel[]){
    let categories: string[];
    products.forEach(res => {
      categories.push(res.category);
      categories = [...new Set(categories)];
    })
    return categories;
  }

}
