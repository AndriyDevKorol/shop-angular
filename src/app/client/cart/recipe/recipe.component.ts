import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit, OnDestroy {

  @Input()
  product: Product;
  subscription: Subscription;
  recipeEventSubscription: Subscription;
  total: number;
  count: number;

  constructor() { }

  ngOnInit() {
    this.total = this.total + (this.product.count * this.product.price);
  }


  ngOnDestroy() {
    this.recipeEventSubscription.unsubscribe();
  }



}
