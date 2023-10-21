import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form2',
  templateUrl: './template-driven-form2.component.html',
  styleUrls: ['./template-driven-form2.component.css']
})
export class TemplateDrivenForm2Component implements OnInit {
  ngOnchanges(){
  }
  
  ngOnInit(): void {
  
  }

  myData:any={};
  myData2:any={};
  cities:string []=['Mumbai', 'Surat', 'Hyderabd', 'Pune']

  onSubmit(Data:any){
  console.log(Data)
  this.myData=Data
  }

 

  model = {
    name: '',
    age:'',
    addresses: [{
      houseNo:'',
      city: '',
      colony:'',
      state: '',
      country: ''

    }]
  }

  hello = [{
    name: 'ss',
    age:'33',
    addresses: [{
      houseNo:'gpl',
      city: 'lofyuyjyffjyfjyffffy',
      colony:'u',
      state: 'rr',
      country: 'rr'

    }]
  }]

  onSubmit2(data:any){
  console.log(data);
  this.myData2=data
  }

}
