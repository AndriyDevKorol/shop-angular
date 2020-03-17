import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//   transform(items: any[], searchText: string): any[] {
//     if(!items) return [];
//     if(!searchText) return items;
// searchText = searchText.toLowerCase();
// return items.filter( it => {
//       return it.toLowerCase().includes(searchText);
//     });
//    }

public transform(value, keys: string, term: string) {

  if (!term) return value;
  keys=keys.toLowerCase();
  term=term.toLowerCase();
  return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

}
}
