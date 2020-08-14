import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';

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
}
