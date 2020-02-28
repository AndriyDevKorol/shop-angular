import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products: any[];
  constructor( public productService: ProductService ) { }

  ngOnInit() {
    this.getProductList();
  }


 getProductList(){
  this.productService.getProducts().snapshotChanges()
  .subscribe(data => {this.products = data.map(e=>{
    return {
      $key: e.key,
      ...e.payload.val()

    }
  }).reverse()});
 }


 onAddToCart($key){
  console.log('products c ', $key);
  }

}
