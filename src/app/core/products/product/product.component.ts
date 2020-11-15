import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from '../../../models/product.model';
import { ShareDataService } from '../../services/shareData.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input() products$: ProductModel[];
  destroy$: Subject<void> = new Subject<void>();
  searchTerm: string;
  selectedCategory: string;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit() {
    this.shareDataService.currentCategory.subscribe(res => {
      if(res){
        this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe(params => {
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

  getProductOfCategory(selectedCategory: string){
    this.productService.getProductByCategory(selectedCategory);
  }
}
