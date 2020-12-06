import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/core/services/shareData.service';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.less']
})
export class LeftMenuComponent implements OnInit {
  @Input() products$: ProductModel[];

  constructor(
    private shareDataService: ShareDataService,
    ) { }

  ngOnInit() {
  }

  getValue(category: string){
    this.shareDataService.getProductsOfCategory(category);
  }
}
