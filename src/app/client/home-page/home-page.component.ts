import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  products$: ProductModel[];
  productCategories$ = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }


  ngOnInit() {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts()
    .subscribe(res => {
      this.products$ = res
    });
  }
}
