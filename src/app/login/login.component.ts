import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../model/login.model';
import { ApiService } from "../api.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  agencyLogin: FormGroup
  companyLogin: FormGroup;
  invidualLogin: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private _apiService: ApiService) {
  }

  ngOnInit() {
    this.agencyLogin = this.formBuilder.group({
      agency_email: ['', [Validators.required, Validators.email]],
      agency_password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.companyLogin = this.formBuilder.group({
      company_email: ['', [Validators.required, Validators.email]],
      company_password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.invidualLogin = this.formBuilder.group({
      invidual_email: ['', [Validators.required, Validators.email]],
      invidual_password: ['', [Validators.required, Validators.minLength(6)]],
    });

  }
  // convenience getter for easy access to form fields
  get agencyValidation() { return this.agencyLogin.controls; }
  get companyValidation() { return this.companyLogin.controls; }
  get invidualValidation() { return this.invidualLogin.controls; }


  onSubmit_Agency() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.agencyLogin.invalid) {
      return;
    }
    console.log("Json Data",this.agencyLogin.value);
    let agencyLoginDetails =new login(this.agencyLogin.value);
    console.log(agencyLoginDetails);
    let checkvalue = this._apiService.login(this.agencyLogin.value)
    // .subscribe((data: any)=>{
    //   console.log("Data", data)
    // })
    console.log("checkvalue from REST",checkvalue)

  }
  onSubmit_company() {
    this.submitted = true;
    if (this.companyLogin.invalid) {
      return;
    }
    this.router.navigateByUrl('adminHome');
  }
  onSubmit_Invidual() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.invidualLogin.invalid) {
      return;
    }
    this.router.navigateByUrl('adminHome');
  }

  onReset() {
    this.submitted = false;
  }

}
