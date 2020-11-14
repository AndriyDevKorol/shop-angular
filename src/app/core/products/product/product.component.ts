import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from '../../../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() products$: ProductModel[];
  destroy$: Subject<void> = new Subject<void>();
  // products$: ProductModel[] = [];
  searchTerm: string;
  @Input() category: string;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(this.category){
      this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
        const id = +params.get('category');
         this.productService.getProductByCategory(this.category).subscribe(res => {
          this.products$ = res
         });
      });
    } else {
      this.getProducts();
    }
  }

  private getProducts(){
    this.productService.getProducts()
    .subscribe(res => {
      this.products$ = res
    });
  }
}
