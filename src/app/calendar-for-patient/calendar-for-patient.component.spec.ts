import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarForPatientComponent } from './calendar-for-patient.component';

describe('CalendarForPatientComponent', () => {
  let component: CalendarForPatientComponent;
  let fixture: ComponentFixture<CalendarForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
