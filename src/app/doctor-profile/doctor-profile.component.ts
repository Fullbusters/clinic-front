import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../doctor.service'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  doctor = {}
  id
  constructor(private DoctorService: DoctorService,
               private route: ActivatedRoute){ }

  ngOnInit() {
     this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.DoctorService.getOne(this.id)
        .subscribe(data => this.doctor = { ...data} );
    });
  }

}
