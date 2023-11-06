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
 submitted2: any = true;
 
 check = true;
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
    debugger
    this.submitted = true;
    if (this.apiForm.valid ) {
      let formValue = this.apiForm.value;
      if(formValue.id == 0 && this.submitted2){
        const formDataLength = this.formData.length;
        let nextId = 1;
        if (formDataLength != 0) {
          nextId = formDataLength + 1;
        } 
        
        let data = this.apiForm.value;
        data.id = nextId; 
        

        this.formData.push(data);
        console.log(this.apiForm.value);
      } else {
        let i=this.formData.findIndex((res) => res.id ===  formValue.id);
        if (i !== -1){
          this.formData[i] = this.apiForm.value;
        }else{

          if(this.check){
            this.service.putData(formData).subscribe((res:any) => {
              this.apiData[0].title = res.title;
              this.apiData[0].body = res.body;
            })
            this.submitted = true;
          }else{
            this.service.putData(formData).subscribe((res:any) => {
              this.apiData[res.id - 1].title = res.title;
              this.apiData[res.id - 1].body = res.body;
            })
            this.submitted = true;
          }
          
        } 
    }
  }
  }
 // Method for PUT

 onEdit(id: any): void {
  const record = this.apiData.find((res) => {
  return res.id == id.id;
  })
  this.apiForm.patchValue(record);
  this.submitted2 = false;
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
