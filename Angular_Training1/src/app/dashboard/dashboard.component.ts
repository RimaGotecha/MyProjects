import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardForm: FormGroup;
  constructor(private dataservice: DataService) { }

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  phoneNumber = new FormControl('' , [Validators.required, Validators.minLength(9)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  
  getErrorMessageLastName(){
    return this.lastName.hasError('required') ? 'Enter Last Name' : 
        '';
  }

  getErrorMessageFirstName(){
    return this.lastName.hasError('required') ? 'Enter First Name' : 
        '';
  }

  getErrorMessageEmail(){
    return this.email.hasError('required') ? 'Please enter a valid email Id' :
        this.email.hasError('email') ? 'Enter a valid email' :
            '';
  }

 getErrorMessagePhNo(){
  return this.phoneNumber.hasError('required')? 'Please enter a valid number' :
  this.phoneNumber.hasError('maxlength')? 'Required 10 digit':
  this.phoneNumber.hasError('minLength')? 'Required 10 digit':
  '';
 }



 ngOnInit() {

  this.dashboardForm = new FormGroup({
    firstName: new FormControl()
  });
}

onSubmit() {
  // this.dataservice.AddData()
}
}
