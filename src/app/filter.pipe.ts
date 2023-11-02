import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees:any [],filterText: string ) {
   

    if (employees.length === 0 || filterText==='') {
      return employees;
    }

    filterText = filterText.toLowerCase().toString();

    return employees.filter(item => {
      return item.name.toLowerCase().includes(filterText) || item.role.toLowerCase().includes(filterText
         || item.id.toString().toLowerCase().includes(filterText)); 
      
    }); 


  }

}
