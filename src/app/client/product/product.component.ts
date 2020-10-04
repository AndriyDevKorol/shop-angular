import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  products$: ProductModel[] = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts()
    .pipe(map((res: ProductModel[]) => {
      const productArray: ProductModel[] = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          productArray.push({ ...res[key], $key: key });
        }
      }
      return productArray;
    }))
    .subscribe(res => {
        this.products$ = res
      }
    );
  }

}
