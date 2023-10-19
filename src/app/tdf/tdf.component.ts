import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  onSubmit(data:any){
    console.log(data)
  }

    
  resetUserForm(form: NgForm) {
    form.resetForm();;
} 

}
