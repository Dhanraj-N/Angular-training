import { Component, OnInit } from '@angular/core';
import { BsDataService } from 'src/app/services/bs-data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  ngOnInit(): void {
   
  }
  constructor(private bsdata:BsDataService){}

  emitDataUsingBehaviourSubject (): void {
    this.bsdata.dataBSubject.next('this data is from component one');
  }

  emitDataUsingSubject (): void {
    this.bsdata.dataSubject.next('this data is from component one1');
  }

}
