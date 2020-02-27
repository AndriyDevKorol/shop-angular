import { Component, OnInit} from '@angular/core';
import { ProductService } from '../../services/product/product.service';


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
  // this.productService.getProducts()
  // .snapshotChanges()
  // // .pipe ( map ( change =>
  // //   // console.log(this.products = change)
  // //   change
  // //   .map( c => (
  // //     // console.log( c.payload.key, ...c.payload.val())
  // //     {
  // //       key:c.payload.key, ...c.payload.val()
  // //     }
  // //   ))
  // //   ))
  // .subscribe(
  //   products => {this.products = products}
  // );

  this.productService.getProducts().snapshotChanges()
  .subscribe(data => {this.products = data.map(e=>{
    // console.log(e.key);
    return {
      $key: e.key,
      ...e.payload.val()

    }
  })});

    // .snapshotChanges().pipe(
    //   map(action => {
    //     return action.map(a => {
    //       const id = a.payload.key
    //       const data = a.payload.val
    //       return {id, ...data}
    //     })
    //   })).subscribe(
    //       products => {this.products = products}
    //     );
 }


 onAddToCart($key){
console.log('products c ', $key);
 }

}
