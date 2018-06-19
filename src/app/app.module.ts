import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { SpecialtyComponent } from './specialty/specialty.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { PatientService } from './patient.service';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { SpecialtyService } from './specialty.service';
import { DoctorService } from './doctor.service';
import { CalendarForDoctorComponent } from './calendar-for-doctor/calendar-for-doctor.component';
import { CalendarForPatientComponent } from './calendar-for-patient/calendar-for-patient.component';
import { CalendarService } from './calendar.service';
import { SpecialtyinfoComponent } from './specialtyinfo/specialtyinfo.component';
import { RegisterdoctorComponent } from './registerdoctor/registerdoctor.component'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    SpecialtyComponent,
    PatientProfileComponent,
    DoctorProfileComponent,
    ProjectinfoComponent,
    CalendarForDoctorComponent,
    CalendarForPatientComponent,
    SpecialtyinfoComponent,
    RegisterdoctorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, PatientService, SpecialtyService, DoctorService, CalendarService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
