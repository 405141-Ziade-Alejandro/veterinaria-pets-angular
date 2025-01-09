import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
  standalone: true
})
export class AgePipe implements PipeTransform {

  transform(birthYear: number): unknown {
    const currentYear = new Date().getFullYear();

    return currentYear - birthYear;
  }

}
