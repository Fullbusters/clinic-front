import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-registerdoctor',
  templateUrl: './registerdoctor.component.html',
  styleUrls: ['./registerdoctor.component.css']
})
export class RegisterdoctorComponent implements OnInit {

  registerUserData = {}
  registerDoctorData = {}
  Doctorid =''
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  registerDoctor() {
    this._auth.registerDoctor(this.registerDoctorData)
    .subscribe(
      res =>{
        this.Doctorid = res
        console.log(res)
        this.registerUser()
      },
      err => console.log(err),
    )
    
  }

  registerUser(){
    this._auth.registerUserDoctor(this.registerUserData, this.Doctorid)
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
