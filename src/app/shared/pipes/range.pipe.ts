import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  // transform(_input: any, size: number = 0, start: number = 1000, step: number = 10): any {
  //   const range: number[] = [];
  //   for (let length = 0; length < size; ++length) {
  //     range.push(start);
  //     start += step;
  //   };
  // }

  public transform(value, keys: string, term: string) {

    if (!term) { return value; }
    keys = keys.toLowerCase();
    term = term.toLowerCase();
    return (value || []).filter(item => keys.split(',').some(key => {

    //  keys.split(',').some(key => new RegExp(term, 'gi').test(item[key]));
    }));
  }
}
