import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/shared/modules/Product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products: any[];
  searchFormControl: FormControl;
  editProductKey: string;

  constructor( public productService: ProductService ) { }

  ngOnInit() {
    this.getProductList();
    // this.productService.editProductEvent.subscribe((product: Product) => {
    //   // console.log('Edit event11', product);
    //   if(product.$key) {
    //     this.editProductKey = product.$key;
    //     console.log(this.editProductKey);
    //   }else{
    //     this.editProductKey = '0'
    //   }
    // })
  }


 getProductList(){
  this.productService
  .getProducts().snapshotChanges()
  .subscribe(data => {
    // this.products = data.filter(dat => dat.prevKey)
    this.products = data.map(e=>{
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
