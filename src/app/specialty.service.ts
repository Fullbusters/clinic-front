import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpecialtyService {

  private _specialtyUrl = "http://localhost:8080/api/specialty"
  private _doctorUrl = "http://localhost:8080/api/doctor/spec/"
  constructor(private http: HttpClient) { }

  get(){
    return this.http.get<any>(this._specialtyUrl)
  }

  save(specialty){
    console.log(specialty)
    return this.http.post(this._specialtyUrl, specialty)
  }

  getDoctor(id){
    return this.http.get<any>(this._doctorUrl+id)
  }

  addDoctor(id, specid){
    return this.http.put(this._doctorUrl+id, specid)
  }
}
