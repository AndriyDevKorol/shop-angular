import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { map } from 'rxjs/operators';
import { AngularFireList } from '@angular/fire/database';
import { Product } from 'src/app/shared/modules/Product';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }



  ngOnInit() {
   this.productService.getProducts().subscribe(res => console.log(res));
  }


}
