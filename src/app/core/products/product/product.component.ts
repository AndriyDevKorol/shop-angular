import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from '../../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  products$: ProductModel[] = [];
  public searchTerm: string;

  constructor(
    private router: Router,
    private productService: ProductService,
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