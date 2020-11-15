import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/core/services/product.service';
import { ShareDataService } from 'src/app/core/services/shareData.service';
import { ProductModel } from 'src/app/models/product.model';
import { ProductFilterService } from 'src/app/shared/services/filter/product-filter.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Input() products$: ProductModel[];

  constructor( private shareDataService: ShareDataService,) { }

  ngOnInit() {
  }

  getValue(category: string){
    this.shareDataService.changeCategory(category);
  }

}
