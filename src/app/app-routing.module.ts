import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth.guard';
import { SpecialtyComponent } from './specialty/specialty.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { CalendarForDoctorComponent} from './calendar-for-doctor/calendar-for-doctor.component'
import { SpecialtyinfoComponent } from './specialtyinfo/specialtyinfo.component'
import { RegisterdoctorComponent } from './registerdoctor/registerdoctor.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'registerdoctor',
    component: RegisterdoctorComponent
  },
  {
    path: 'specialty',
    component: SpecialtyComponent
  },
  {
    path: 'patientprofile/:id',
    component: PatientProfileComponent
  },
  {
    path: 'projectinfo',
    component: ProjectinfoComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'doctorprofile/:id',
    component: DoctorProfileComponent
  },
  {
    path: 'calendarfordoctor/:id',
    component: CalendarForDoctorComponent
  },
  {
    path: 'specialtyinfo/:id',
    component: SpecialtyinfoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
