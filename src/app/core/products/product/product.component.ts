import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
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
  isAdmin = this.afauth.auth.currentUser;
  countVal = 1;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService,
    private afauth: AngularFireAuth
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

  onDelete($key: string): void {
    // this.productService.onDelete(this.product.$key);
    // alert('Продукт успішно видалено');
  }

  onEdit(product: ProductModel): void {
    //  this.productService.emitEditProduct(product);
  }

  onCount(counter: number) {
    this.countVal = this.countVal + counter;
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }
}
