import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form2',
  templateUrl: './template-driven-form2.component.html',
  styleUrls: ['./template-driven-form2.component.css']
})
export class TemplateDrivenForm2Component implements OnInit {
 
  ngOnInit(): void {
  };
  myData:any='';
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
}
