import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.less']
})
export class HomeContentComponent implements OnInit {
  product: Product;
  products: Product[];
  categories: any;
  searchFormControl: FormControl;
  editProductKey: string;
  isAdmin = this.afauth.auth.currentUser;
  selectedCategory: string;
  categoryList: string[];
  searchCategory;
  searchTitle;
  searchPrice;
  searchBody;

  constructor(
    public productService: ProductService,
    public filterService: ProductFilterService,
    private afauth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.filterService.selectedCategoryEvent.subscribe(res =>  {this.getProductList(res)});
    // this.loadData();
  }

  getProductList(selectedCategory: string) {
    this.productService
    .getProducts().snapshotChanges()
    .subscribe(data => {
      let productsList = data.map(e => {
        return {
          $key: e.key,
          ...e.payload.val()
        }
      }).reverse();
      this.products = this.filterService.getCategory(productsList, selectedCategory);
      this.categoryList = [...new Set(productsList.map(res => res.category))];
      this.filterService.getCategoryListListener(this.categoryList);
    });
  }

}
