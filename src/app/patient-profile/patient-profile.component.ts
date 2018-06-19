import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  patient = {}
  id
  constructor(private Patientservice: PatientService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.Patientservice.getOne(this.id)
        .subscribe(data => this.patient = { ...data} );
    });
  
  }
}
