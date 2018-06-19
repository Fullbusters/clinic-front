import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DoctorService {

  private _doctorUrl="http://localhost:8080/api/doctor"
  constructor(private http: HttpClient) { }

  getOne(id){
    return this.http.get(this._doctorUrl+"/user/"+id)
  }
  
  getAll(){
    return this.http.get(this._doctorUrl)
  }
  
  update(doctor){
    return this.http.put(this._doctorUrl, doctor)
  }
}
