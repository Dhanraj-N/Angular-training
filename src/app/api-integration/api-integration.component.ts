import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api-integration',
  templateUrl: './api-integration.component.html',
  styleUrls: ['./api-integration.component.css']
})
export class ApiIntegrationComponent implements OnInit{
  myId = '';
  myUserId = '';
  myTitle = '';
  myBody = '';
  isHidden = true;

  ApiData: any = [];
  
  ApiDataById: any = {}
  constructor(private service:ApiService) {}

  ngOnInit(): void {
    
  }

  getData () {
    this.service.getData().subscribe((res) => {
    this.ApiData = res;
    })
  }

  getDataById (id: any) {
    this.service.getDataById(id).subscribe((res) => {
    console.log(res);
    this.ApiDataById = res;
    })
  }
  
  onSubmit(Obj:any) : void {
    this.service.addData(Obj).subscribe((res) => {
      console.log(res);
    })
  }

  deleteData(id:any){
    this.service.deleteData(id).subscribe((res) => {
      console.log(res);
    })
  }

  onEdit(data: any) : void {
     this.myId = data.id;
     this.myUserId = data.userId;
     this.myTitle = data.title;
     this.myBody = data.body;
  }

  updateData(data: any) {
    this.service.updateData(data).subscribe((res) => {
      console.log(res);
    })
  }

}
