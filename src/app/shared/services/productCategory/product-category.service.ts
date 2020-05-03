import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../../modules/Product';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  private products: Product[];
  private loadProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  loadProductsEvent = this.loadProducts.asObservable();

  constructor(
    public productService: ProductService,
  ) { }


  getCategory(products:Product[], category: string) {
    if (!category) { return products;}
    return products.filter(e => e.category == category);
  }

}
