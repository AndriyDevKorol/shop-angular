import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {

  detailsEventSubscription: Subscription;
  products: Product[];

  product: Product = {
    $key:'',
    title: '',
    price: 0,
    body: '',
    category: '',
    shortDescription:''
  };

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.detailsEventSubscription = this.productService.detailProductEvent.subscribe((product: Product[])=>{
      console.log(product);
      this.products = product
    })
  }

  ngOnDestroy(): void {
    this.detailsEventSubscription.unsubscribe();
  }

}
