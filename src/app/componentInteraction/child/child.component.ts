import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  
  @Input() strDataRecieved='';
  @Input() set randomNo(data: number) {
    // Call function to add 10
    this.randomNoFun()
  }
  @Output() childClick = new EventEmitter();

  count:number =1;
  dataFromParent='';
  stringData='This message is from child';

ngOnInit(): void {
}

onCount(){
  let myCount= this.count++;
  this.childClick.emit(myCount);
}

randomNoFun(){
  
}



}
