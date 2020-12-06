import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../modules/Product';

@Pipe({
  name: 'productFilter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchTerm: string): any[] {
    if( !searchTerm) return products;
    searchTerm = searchTerm.toLowerCase();
    return products.filter( it => {
      return it.title.toLowerCase().includes(searchTerm);
    });
   }

  // public transform(value, keys: string, term: string) {

  //   if (!term) { return value; }
  //   keys = keys.toLowerCase();
  //   term = term.toLowerCase();
  //   return (value || [])
  //     .filter(item => keys.split(',')
  //     .some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi')
  //     .test(item[key])));
  // }
}
