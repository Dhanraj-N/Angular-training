import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  registrationForm!: FormGroup;
  submitted = false;
  addAddressButton=true;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      id:['', [Validators.required]],
      name:['', [Validators.required]],
      age:['', [Validators.required, Validators.min(18), Validators.max(76)]],
      email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      address: this.fb.array([])
    });

    this.addAddress();
  }

  get address(): FormArray{
    return this.registrationForm.get('address') as FormArray;
  }

  addAddress(): void {
    this.address.push(this.getAddressForm());
    console.log(this.address)
  }

  removeAddress(i:number) {
    this.address.removeAt(i);
  }

  getAddressForm(): FormGroup {
    let addressIndex = this.registrationForm.value.address.length + 1;
   
    return new FormGroup({
      addressId: new FormControl(addressIndex),
      addressLine1: new FormControl('', [Validators.required]),
      addressLine2: new FormControl(''),
      landmark: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    });
  }

  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.valid) {
      alert('Form Submitted succesfully..');
      console.log(this.registrationForm.value);
    }
  }

}
