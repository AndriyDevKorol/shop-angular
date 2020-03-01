import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../shared/services/product/product.service';
import { FormControl } from '@angular/forms';


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
}
