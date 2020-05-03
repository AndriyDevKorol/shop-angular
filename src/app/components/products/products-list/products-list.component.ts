import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Product } from 'src/app/shared/modules/Product';
import { ProductCategoryService } from 'src/app/shared/services/productCategory/product-category.service';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {
  product: Product;
  products: Product[];
  searchFormControl: FormControl;
  editProductKey: string;
  isAdmin = this.afauth.auth.currentUser;
  selectedCategory = 'мішок'

  constructor(
    public productService: ProductService,
    public categoryFilter: ProductCategoryService,
    private afauth: AngularFireAuth
    ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService
    .getProducts().snapshotChanges()
    .subscribe(data => {
      let productsList = data.map(e => {
        return e.payload.val();
      }).reverse();
      this.products = this.categoryFilter.getCategory(productsList, this.selectedCategory);
    });
  }
}
