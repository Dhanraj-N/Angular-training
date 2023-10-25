import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  strData='This message is from parent';
  
  dataFromChild = 0;
  onChildClick(data:any){
     this.dataFromChild=data
  }
}
