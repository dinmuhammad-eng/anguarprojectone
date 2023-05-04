import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataArray: any[] = []; 
  title = 'xone';
  name = '';
  fname = '';
  nname = '';
  ename = '';

  @ViewChild('logInForm') logInForm!: NgForm;

  logInUser(data:any){
    this.dataArray.push(data);
    this.logInForm.reset();
  }
}
