import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = '', phrase2?: string): any {
    if (!Array.isArray(value) || !phrase || !key) {
      return value;
    }

  }
}
