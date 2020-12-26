import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit, OnDestroy {
  products$: ProductModel[];
  productCategories$ = [];
  unsubscribe$ = new Subject();

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }


  ngOnInit() {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe(res => {
      this.products$ = res.slice(0,6);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
