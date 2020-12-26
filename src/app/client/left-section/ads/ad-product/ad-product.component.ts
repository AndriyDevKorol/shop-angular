import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-ad-product',
  templateUrl: './ad-product.component.html',
  styleUrls: ['./ad-product.component.less']
})
export class AdProductComponent implements OnInit{

  @Input() product$: ProductModel;

  constructor(private productService: ProductService) { }

  ngOnInit() {

  }

}
