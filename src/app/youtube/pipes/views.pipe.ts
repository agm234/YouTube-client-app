import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'views',
})
export class ViewsPipe implements PipeTransform {
  transform(value?: string): string {
    const number = Number(value);
    return this.convertNumber(number);
  }

  convertNumber(number:number) {
    if (Math.abs(number) > 1000000000) {
      const value = (number / 1000000000).toFixed(1);
      return `${String(value)}b`;
    }
    if (Math.abs(number) > 1000000) {
      const value = (number / 1000000).toFixed(1);
      return `${String(value)}m`;
    }
    if (Math.abs(number) > 1000) {
      const value = (number / 1000).toFixed(1);
      return `${String(value)}k`;
    }
    return String(number);
  }
}
