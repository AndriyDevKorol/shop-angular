import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/storage/localStorage.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.less']
})
export class ProductTileComponent implements OnInit {
  @Input() product$: ProductModel;

  countVal = 1;

  constructor( private localStorageService: LocalStorageService,) { }

  ngOnInit() {
  }

  addToCart(value: string) {
    let storageKey = 'cart';

    this.localStorageService.setDataToLocalStorage(storageKey, value);
  }

  onCount(counter: number) {
    this.countVal = this.countVal + counter;
    if (this.countVal < 1) {
      this.countVal = 1;
    }
  }
}
