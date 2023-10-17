import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(){
    return [
      {id:1, name:"Manoj", role:"Angular developer"},
      {id:2, name:"Akash", role:"Java developer"},
      {id:3, name:"Vikash", role:"Python developer"},
      {id:4, name:"Rahul", role:"Java developer"},
      {id:5, name:"Ram", role:"Angular developer"},
    ]
  }
}
