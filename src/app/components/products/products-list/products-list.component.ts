import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Product } from 'src/app/shared/modules/Product';
import { ProductCategoryService } from 'src/app/shared/services/productCategory/product-category.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {
  product: Product;
  products: Product[];
  categories: any;
  searchFormControl: FormControl;
  editProductKey: string;
  isAdmin = this.afauth.auth.currentUser;
  selectedCategory: string;
  categoryList: string[];

  constructor(
    public productService: ProductService,
    public categoryService: ProductCategoryService,
    private afauth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.categoryService.selectedCategoryEvent.subscribe(res =>  {this.getProductList(res)})
    // console.log(this.selectedCategory)});
  }

  getProductList(selectedCategory: string) {
    console.log(this.selectedCategory);
    this.productService
    .getProducts().snapshotChanges()
    .subscribe(data => {
      let productsList = data.map(e => {
        return e.payload.val();
      }).reverse();
      this.products = this.categoryService.getCategory(productsList, selectedCategory);
      this.categoryList = [...new Set(productsList.map(res => res.category))];
      this.categoryService.getCategoryList(this.categoryList);
    });
  }
}
