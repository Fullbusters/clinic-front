import { Component, OnInit } from '@angular/core';
import { SpecialtyService } from '../specialty.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-specialtyinfo',
  templateUrl: './specialtyinfo.component.html',
  styleUrls: ['./specialtyinfo.component.css']
})
export class SpecialtyinfoComponent implements OnInit {

  doctorList = []
  id
  idforadd
  constructor(private specialtyService: SpecialtyService,
              private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
     this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +this.route.snapshot.paramMap.get('id');
      this.specialtyService.getDoctor(this.id)
        .subscribe(data => this.doctorList = data );
    });
  }

  addDoctor(){
    this.specialtyService.addDoctor(this.idforadd, this.id)
    .subscribe(data=> console.log(data))
  }
}
