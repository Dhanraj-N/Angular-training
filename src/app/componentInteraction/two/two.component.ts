import { Component, OnInit } from '@angular/core';
import { BsDataService } from 'src/app/services/bs-data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit{
   
  BsValue: string='';
  SValue!: string ;
  constructor (private bsData:BsDataService){}

  ngOnInit(): void {
    this.bsData.dataBSubject.subscribe((d:any)=>{
      this.BsValue = d;
    })

    this.bsData.dataSubject.subscribe((d1:any)=>{
      console.log(">>>>>>",d1);
       this.SValue = d1;
      })
      console.log("??????????",this.SValue);
  }
  ngDoCheck(): void {
    this.bsData.dataSubject.subscribe((d1:any)=>{
      console.log(d1);
       this.SValue = d1;
       console.log(this.SValue);
    })
  }

}
