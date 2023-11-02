import { Pipe, PipeTransform } from '@angular/core';
import { Cities, Countries, States } from './dropdownData';

@Pipe({
  name: 'cascading'
})
export class CascadingPipe implements PipeTransform {

  transform(id: number, type:string) {
    switch (type) {
      case 'country':
        const country = Countries.find((d) => d.id == id);
        return country? country.name : '';

      case 'state':
        const state = States.find((d) => d.id == id);
        return state? state.name : '';

      case 'city':
        const city = Cities.find((d) => d.id == id);
        return city? city.name : '';

      default:
        return '';
    }
  }

}
