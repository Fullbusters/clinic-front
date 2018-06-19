import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyinfoComponent } from './specialtyinfo.component';

describe('SpecialtyinfoComponent', () => {
  let component: SpecialtyinfoComponent;
  let fixture: ComponentFixture<SpecialtyinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
