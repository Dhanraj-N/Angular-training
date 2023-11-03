import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
 selector: 'app-api-integration',
 templateUrl: './api-integration.component.html',
 styleUrls: ['./api-integration.component.css'],
})
export class ApiIntegrationComponent implements OnInit {
 myId = '';
 myUserId = '';
 myTitle = '';
 myBody = '';
 isHidden = true;
 submitted = false;

 apiData: Array<any> = [];
 formData : Array<any> = [];

 postId: number | undefined;
 apiForm !: FormGroup;
 updateForm !: FormGroup;
 constructor(private service: ApiService, private fb : FormBuilder) {}

 ngOnInit(): void {
  this.apiForm = this.fb.group({
    id : [0], 
    userId : ['', [Validators.required]], 
    title : ['', [Validators.required]],
    body : ['', [Validators.required]],
  });
 }

 // Method for GET

 getAllData(): void {
  this.service.getAllData().subscribe((res) => {
   this.apiData = res;
  });
 }

 getDataById(): void {
  this.service.getDataById(this.postId).subscribe((res) => {
   this.apiData = [res];  //{ sdfsdf: sdfsdf}
  });
 }

 // Method for POST

  postData(formData : any): void {
    this.submitted = true;
    if (this.apiForm.valid) {
      this.service.postData(formData).subscribe((res) => {
        this.apiData.push(res);
     })
    }
  }

 // Method for PUT

 onEdit(id: any): void {
  const record = this.apiData.find((res) => {
  return res.id == id.id
  })
  this.apiForm.patchValue(record);
 }

 putData(data: any): void {
  this.service.putData(data).subscribe((res) => {
   console.log('Record is updated succesfully of Id ' + data.id, res);
  });
 }

 // Method for DELETE

 deleteData(id: any): void {
  this.service.deleteData(id).subscribe((res) => {
   console.log('Record is deleted of Id ' + id, res);
  });
 }

}
