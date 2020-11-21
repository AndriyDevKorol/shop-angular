import { Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Product } from 'src/app/shared/modules/Product';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';
import { map, takeUntil } from 'rxjs/operators';
import { keyframes } from '@angular/animations';
import { ProductService } from '../../services/product.service';
import { ProductModel } from 'src/app/models/product.model';
import { Subject } from 'rxjs';
import { ShareDataService } from '../../services/shareData.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {
  products$: ProductModel[];
  unsubscribe$ = new Subject();
  product: Product;
  categories: any;
  searchFormControl: FormControl;
  editProductKey: string;
  isAdmin = this.afauth.auth.currentUser;
  selectedCategory: string;
  categoryList: string[];
  searchTitle;


  constructor(
    private productService: ProductService,
    public filterService: ProductFilterService,
    private shareDataService: ShareDataService,
    private afauth: AngularFireAuth,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.shareDataService.currentCategory.subscribe(res => {
      if(res){
        this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe(params => {
          const id = +params.get('category');
           this.productService.getProductByCategory(res).subscribe(res => {
            this.products$ = res
           });
        });
      } else {
        this.getProducts();
      }
    });
  }

  private getProducts(){
    this.productService.getProducts()
    .subscribe(res => {
      this.products$ = res

    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
