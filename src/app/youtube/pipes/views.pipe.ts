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
    if (Math.abs(number) > 1_000_000_000) {
      const value = (number / 1_000_000_000).toFixed(1);
      return `${value}b`;
    }
    if (Math.abs(number) > 1_000_000) {
      const value = (number / 1_000_000).toFixed(1);
      return `${value}m`;
    }
    if (Math.abs(number) > 1_000) {
      const value = (number / 1_000).toFixed(1);
      return `${value}k`;
    }
    return String(number);
  }
}
