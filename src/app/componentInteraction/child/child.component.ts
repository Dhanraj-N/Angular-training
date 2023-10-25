import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
ngOnInit(): void {

}
count:number =1

@Input() strDataRecieved='';

@Output() childClick = new EventEmitter();

stringData='This message is from child';

onCount(){
  let myCount= this.count++
  this.childClick.emit(myCount);
}

}
