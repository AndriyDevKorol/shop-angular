import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  @Input()
  product: Product;
  subscription: Subscription;
  recipeEventSubscription: Subscription;
  total: number;
  count: number;

  constructor() { }

  ngOnInit() {
    console.log('recipe');
    // this.total = this.total + (this.product.count * this.product.price);
  }


  ngOndestroy() {
    console.log('destroy recipe');
    this.recipeEventSubscription.unsubscribe();
  }



}
