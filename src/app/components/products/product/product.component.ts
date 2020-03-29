import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { ProductService } from '../../../shared/services/product/product.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('product')product: Product;
  editProductKey: string;
  isAdmin = this.afauth.auth.currentUser;
  products: Product[];


  constructor(
    private productService: ProductService,
    private afauth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.editEventListener();
  }

  addToCart(product: Product): void {
    this.productService.emitAddToCart(product);
    alert('Продукт успішно додано в корзину');
  }

  onDelete($key: string): void {
    this.productService.onDelete(this.product.$key);
    alert('Продукт буде видалено');
  }

  onEdit(product: Product[]): void {
     this.productService.emitEditProduct(product);
  }

  onReset(): void {
     this.productService.emitEditProduct([]);
  }

  editEventListener() {
    this.productService.editProductEvent.subscribe((product: any) => {
      if (product.$key === this.product.$key) {
        this.editProductKey = product.$key;
      } else {
        this.editProductKey = '';
      }
    });
    this.onReset();
  }

  onDetailsProduct(product: Product) {
    this.productService.emitDetailProduct(product);
  }
}