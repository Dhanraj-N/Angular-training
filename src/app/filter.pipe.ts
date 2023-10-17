import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees:any [],filterText: string ) {
    if (!employees || !filterText) {
      return employees;
    }

    filterText = filterText.toLowerCase();

    return employees.filter(item => {
      return item.name.toLowerCase().includes(filterText); 
    });
  
  }

}
