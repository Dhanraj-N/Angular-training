import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTraining';
  employees:any='';
  strData="good morning india";
  myDate=new Date();
  filterText:string='';
  a:number=1.22;

  constructor (private service:DataService){ }

  ngOnInit(): void {
  this.employees= this.service.getData()
  }

}
