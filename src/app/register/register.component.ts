import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  registerPatientData = {}
  Patientid =''
  Data = [this.registerUserData,this.registerPatientData]
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerPatient() {
    this._auth.registerPatient(this.registerPatientData)
    .subscribe(
      res =>{
        this.Patientid = res
        console.log(res)
        this.registerUser()
      },
      err => console.log(err),
    )
    
  }
  registerUser(){
    this._auth.registerUser(this.registerUserData, this.Patientid)
    .subscribe(
      res => { 
        console.log(res),
        console.log(res.token),
        localStorage.setItem('token', res.token),
        localStorage.setItem('id',res.id),
        this._router.navigate(['/'])
      },
      err => console.log(err)
    )   
  }

}
