import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor(private productService: ProductService) { }

  data = {
  title: "string",
  price: "number",
  category: "string",
  shortDescription: "string",
  body: "string",
  }

  ngOnInit() {
  }

  postData(data = {
    title: "string",
    price: "number",
    category: "string",
    shortDescription: "string",
    body: "string",
    }){
    this.productService.postProduct(data).subscribe(res => console.log(res));
  }

  getData(){
    this.productService.getProducts()
    .pipe(
      map(res => {
        const postsArray = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)){
            postsArray.push({...postsArray[key], id: key});
          }
        }
        return postsArray;
      })
    )
    .subscribe(res => console.log(res));

  }
}
