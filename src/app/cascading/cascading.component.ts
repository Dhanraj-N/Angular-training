import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cities, Countries, States } from './dropdownData';

@Component({
  selector: 'app-cascading',
  templateUrl: './cascading.component.html',
  styleUrls: ['./cascading.component.css']
})
export class CascadingComponent implements OnInit {

  registrationForm!: FormGroup;
  submitted = false;

  countryData: Array<any> = Countries;
  countryList: Array<any> = Countries;

  stateData: Array<any> = States;
  stateList: Array<any> = States;

  cityData: Array<any> = Cities;
  cityList: Array<any> = Cities;

  constructor (private fb : FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      country : ['', [Validators.required]],
      state : ['', [Validators.required]],
      city : ['', [Validators.required]],
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }

  onSelectCountry(id:any) : void{
    this.registrationForm.controls['state'].reset(); 
    this.registrationForm.controls['city'].reset(); 
    const countryId = +id.target.value;
    this.stateList = this.stateData.filter((d: any) => d.countryId === countryId);
  }

  onSelectState(id : any) : void{
    const stateId = +id.target.value;
    this.registrationForm.controls['city'].reset(); 
    this.cityList = this.cityData.filter((d1: any) => d1.stateId === stateId);
  }

}
