import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 
  strData='This message is from parent';
  dataFromChild = 0;
  parentClickNo = 0;

  ngOnInit(): void { }
  
  onChildClick(data:any): void {
    this.dataFromChild = data;
  }

   onParentClick(): void {
    this.parentClickNo = Math.random();
  }

}
