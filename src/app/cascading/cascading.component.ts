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

  formData: Array<any> = [];

  constructor (private fb : FormBuilder){}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      id: [0],
      country : ['', [Validators.required]],
      state : ['', [Validators.required]],
      city : ['', [Validators.required]],
    })
  }

  onSubmit(){
    this.submitted = true;

    if (this.registrationForm.valid) {

       let formValue = this.registrationForm.value;

      if(formValue.id == 0){
        // Find next ID
        const formDataLength = this.formData.length;
        let nextId = 1;
        if (formDataLength != 0) {
          nextId = formDataLength + 1;
        } 
  
        // set next id in id field
        let data = this.registrationForm.value;
        data.id = nextId; 
        
        // Push form into formData 
        this.formData.push(data);
      } else {
         let i=this.formData.findIndex((res) => res.id ===  formValue.id);
         if (i !== -1){
           this.formData[i] = this.registrationForm.value;
         } 
      }

      // reset form
      this.registrationForm.reset();
      this.submitted = false;
    }
  }

  onSelectCountry(id : any) : void{
    this.registrationForm.controls['state'].reset(); 
    this.registrationForm.controls['city'].reset(); 
    const countryId =  +id.target.value;
    this.stateList = this.stateData.filter((d: any) => d.countryId == countryId);
  }

  onSelectState(id : any) : void{
    const stateId = +id.target.value;
    this.registrationForm.controls['city'].reset(); 
    this.cityList = this.cityData.filter((d1: any) => d1.stateId == stateId);
  }

  onEdit(id: number): void {
    // find record from "formData" using "id"
       const record = this.formData.find((res) => res.id == id);

    // patch object into form
      this.registrationForm.patchValue(record);
  }

}
