import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../../shared/services/product/product.service';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Product } from 'src/app/shared/modules/Product';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';
import { map } from 'rxjs/operators';
import { keyframes } from '@angular/animations';



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
    // this.filterService.selectedCategoryEvent.subscribe(res =>  {this.getProductList(res)});
    // this.loadData();
  }

  // getProductList(selectedCategory: string) {

  //   this.productService
  //   .getProducts().snapshotChanges()
  //   .subscribe(data => {
  //     let productsList = data.map(e => {
  //       return {
  //         $key: e.key,
  //         ...e.payload.val()
  //       }
  //     }).reverse();
  //     console.log('1', productsList);
  //     console.log('2', selectedCategory);
  //     this.products = this.filterService.getCategory(productsList, selectedCategory);
  //     console.log('prtt', this.products);
  //     this.categoryList = [...new Set(productsList.map(res => res.category))];
  //     this.filterService.getCategoryListListener(this.categoryList);
  //   });
  // }


  // loadData(){
  //   this.productService.getProducts().valueChanges().subscribe(e => {
  //     let rendomValue = Math.random();
  //     this.products = e.slice(1,2)
  //   });
  // }


}
