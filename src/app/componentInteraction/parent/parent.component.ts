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

  ngOnInit(): void {
    this.fun()
  }
  onChildClick(data:any): void {
    this.dataFromChild = data;
  }

   onParentClick(): void {
    this.parentClickNo = Math.random();
  }
  
  fun(){
    this.observable.subscribe(
      {
        next(x) {
          console.log('got value ' + x);
        }
      }
    )
  }
 observable=new Observable ((sub)=>{
  sub.next(11);
  sub.next(21);
  sub.next(31);

 setTimeout(()=>{
   sub.next(400);
   console.log("h");
   }, 1000)
  sub.complete()
 })

 
 


}
