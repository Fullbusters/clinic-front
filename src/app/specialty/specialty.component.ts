import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from '../specialty.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {

  specialtys = []
  specialtyData = {}
  constructor(private specialtyService: SpecialtyService) { }

  ngOnInit() {
    this.specialtyService.get()
      .subscribe(data =>{
        this.specialtys=data,
        console.log(data)
      })
  }
 
  saveSpecialty(){
    this.specialtyService.save(this.specialtyData)
    .subscribe(data => console.log(data))
  }

}
