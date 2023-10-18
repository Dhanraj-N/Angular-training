import { Component } from '@angular/core';

@Component({
  selector: 'app-inbuilt-directive',
  templateUrl: './inbuilt-directive.component.html',
  styleUrls: ['./inbuilt-directive.component.css']
})
export class InbuiltDirectiveComponent {

  isSpecial:boolean=true; 

  Style1:boolean=true;

  jsonObj={
    "color":"orange",
    "background-color":"green"
  };
}
