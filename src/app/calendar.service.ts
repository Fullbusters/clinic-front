import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CalendarService {

  private calendarurl = "http://localhost:8080/api/weeklytimetable"

  constructor(private http: HttpClient) { }

  get() {
     return this.http.get<any>(this.calendarurl)
    } 
    
  delete(id){

    return this.http.delete(this.calendarurl+"/"+id)
  }

  update(calendar){
    console.log(calendar)
    return this.http.put(this.calendarurl, calendar)
  }

  insert(calendar,id){
    return this.http.post(this.calendarurl+"/"+id, calendar)
  }
}
