import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionComponent } from './reception/reception.component';
import { TodayComponent } from './doctor/today/today.component';
import { FutureComponent } from './doctor/future/future.component';
import { RequestsComponent } from './doctor/requests/requests.component';
import { PostLoginComponent } from './doctor/post-login/post-login.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ModPatientComponent } from './admin/mod-patient/mod-patient.component';
import { ModDoctorComponent } from './admin/mod-doctor/mod-doctor.component';
import { ReceptionHomeComponent } from './reception/reception-home/reception-home.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'adminhome',
    component: AdminhomeComponent
  },
  {
    path: 'adminhome/modpatient',
    component: ModPatientComponent
  },
  {
    path: 'adminhome/moddoctor',
    component: ModDoctorComponent
  },
  {
    path: 'receptionhome',
    component: ReceptionHomeComponent
  },
  {
    path: 'doctor',
    component: DoctorComponent
  },
  {
    path: '',
    component: ReceptionComponent
  },
  {
    path: 'doclogin',
    component: PostLoginComponent,
    children: [
      {
        path: 'today',
        component: TodayComponent,
        outlet: 'sidebaroutlet'
      },
      {
        path: 'future',
        component: FutureComponent,
        outlet: 'sidebaroutlet'
      },
      {
        path: 'requests',
        component: RequestsComponent,
        outlet: 'sidebaroutlet'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
