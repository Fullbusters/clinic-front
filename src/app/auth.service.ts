import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private _registerUrl="http://localhost:8080/api/register";
  private _loginUrl = "http://localhost:8080/api/login";
  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user, id){
    return this.http.post<any>(this._registerUrl+"/"+id, user)
  }

  registerPatient(patient){
    return this.http.post<any>(this._registerUrl+"/patient", patient)
  }

  registerUserDoctor(doctor, id){
    return this.http.post<any>(this._registerUrl+"/doctor/"+id, doctor)
  }
  
  registerDoctor(doctor){
    return this.http.post<any>(this._registerUrl+"/doctor", doctor)
  }
  
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  doctorIn(){
    //  TODO зробити нормально !!!
    return !!(localStorage.getItem('role')=="doctor")
  }

  logoutUser(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('id')
    this._router.navigate(['/'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}
