import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/shared/modules/Product';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.less']
})
export class RecipeComponent implements OnInit {

  @Input() product: Product[];

  constructor() { }

  ngOnInit() {
    console.log('recipe')
  }


  ngOndestroy(){}

}
