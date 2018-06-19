import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PatientService {

  private _profileUrl = "http://localhost:8080/api/patient"
  constructor(private http: HttpClient) { }

  getOne(id){
    return this.http.get(this._profileUrl+"/user/"+id)
  }
}
