import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../../models/product.model';
import { ShareDataService } from '../../services/shareData.service';
import { ProductsModule } from '../products.module';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: ProductModel;
  products$: ProductModel[];
  unsubscribe$: Subject<void> = new Subject<void>();
  searchTerm: string;
  selectedCategory: string;
  isAdmin = this.afauth.auth.currentUser;
  countVal = 1;
  editProductKey: string;
  productId: any;

  private subscription: Subscription;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService,
    private afauth: AngularFireAuth,
  ) { router.events
    .subscribe(console.log);
  }

  ngOnInit() {
    // this.productId = this.product.$key;
    // this.subscription = this.route.params.subscribe(params=>this.productId=params['id']);
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))
  )
  .subscribe(data=> this.productId = +data);

  }


  getProductOfCategory(selectedCategory: string){
    this.productService.getProductByCategory(selectedCategory);
  }

  onDelete(product: ProductModel): void {
    this.productService.deleteProduct(product);
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
  addToCart(product: ProductModel){}

  onReset(){}

  onDetailsProduct(product: ProductModel) {
    // this.productService.emitDetailProduct(product);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
