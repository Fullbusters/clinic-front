import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarForDoctorComponent } from './calendar-for-doctor.component';

describe('CalendarForDoctorComponent', () => {
  let component: CalendarForDoctorComponent;
  let fixture: ComponentFixture<CalendarForDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarForDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarForDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
