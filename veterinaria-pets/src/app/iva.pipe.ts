import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva',
  standalone: true
})
export class IvaPipe implements PipeTransform {

  transform(value: number): number {
    return value * 1.21;
  }

}
