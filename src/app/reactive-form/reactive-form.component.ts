import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  registrationForm!: FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      id:['', [Validators.required]],
      name:['', [Validators.required]],
      age:['', [Validators.required, Validators.min(18), Validators.max(76)]],
      email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
  }

  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.valid) {
      alert('Form Submitted succesfully.');
      console.log(this.registrationForm.value);
    }
  }
 

}
