import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsDataService } from 'src/app/services/bs-data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy {
   
  BsValue: string = '';
  SValue: string = '';

  bsSubscription$ = new Subscription(); 
  subjectSubscription$ = new Subscription(); 

  constructor (private bsData:BsDataService){}

  ngOnInit(): void {
    this.bsSubscription$ = this.bsData.dataBSubject.subscribe((d:any)=>{
      this.BsValue = d;
    });

    this.subjectSubscription$ = this.bsData.dataSubject.subscribe((d1:any)=>{
      this.SValue = d1;
      })
  }


// Whenever we create a behaviorSubject or Subject we need to unsubscribe to it in ngOnDestroy.
  ngOnDestroy(): void {
    if (this.bsSubscription$) {
      this.bsSubscription$.unsubscribe();
    }
    if (this.subjectSubscription$) {
      this.subjectSubscription$.unsubscribe();
    }
  }
}
