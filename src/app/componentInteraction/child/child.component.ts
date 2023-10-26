import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() strDataRecieved='';
  @Input() set randomNo(data: number) {
    this.addNumber(data)
}
  @Output() childClick = new EventEmitter();

  parentClickNo:any='';
  count:number =1;
  dataFromParent='';
  stringData='This message is from child';
  updatedNo: number = 0;

 ngOnInit(): void {
 }

onCount(){
  let myCount= this.count++;
  this.childClick.emit(myCount);
}
 
addNumber(data:any) : void {
  this.updatedNo = data+10;
}
 
}
