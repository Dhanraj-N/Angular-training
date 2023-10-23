import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  
  constructor(private fb:FormBuilder){}

  RegistrationForm=this.fb.group({
    name:['',[Validators.required, Validators.minLength(4)]],
    email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    age:['',[Validators.required, Validators.min(16)]],
    address:this.fb.group({
      houseNo:['', Validators.required],
      colony:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      country:['',[Validators.required]]
    })
  }) 

  get f() { return this.RegistrationForm.controls; }
  onSubmit(){
    console.log(this.RegistrationForm.value);
  }
}
