import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-calendar-for-doctor',
  templateUrl: './calendar-for-doctor.component.html',
  styleUrls: ['./calendar-for-doctor.component.css']
})
export class CalendarForDoctorComponent implements OnInit {
  

  calendarData = {}
  dateList = []
  id
  constructor(private calendarService: CalendarService,
                private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    
      this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.calendarService.get()
        .subscribe(data => this.dateList = data );
    });
  
  }

  saveData(){
    this.calendarService.insert(this.calendarData, this.id)
    .subscribe(data => console.log(data))
  }

}
