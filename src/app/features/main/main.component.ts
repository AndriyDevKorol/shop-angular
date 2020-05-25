import { Component, OnInit } from '@angular/core';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';
import { Product } from 'src/app/shared/modules/Product';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

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
    this.filterService.selectedCategoryEvent.subscribe(res =>  {
      this.getProductList(res)
    });
    // this.loadData();
    console.log('load', this.productService.loadProducts());
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
      console.log('1', productsList);
      console.log('2', selectedCategory);
      this.products = this.filterService.getCategory(productsList, selectedCategory);
      this.categoryList = [...new Set(productsList.map(res => res.category))];
      this.filterService.getCategoryListListener(this.categoryList);
    });
  }


  // loadData(){
  //   this.productService.getProducts().valueChanges().subscribe(e => {
  //     let rendomValue = Math.random();
  //     this.products = e.slice(1,2)
  //   });
  // }
}
