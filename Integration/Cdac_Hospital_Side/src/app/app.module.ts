import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ReceptionComponent } from './reception/reception.component';
import { FutureComponent } from './doctor/future/future.component';
import { PostLoginComponent } from './doctor/post-login/post-login.component';
import { RequestsComponent } from './doctor/requests/requests.component';
import { TodayComponent } from './doctor/today/today.component';
import { FormsModule } from '@angular/forms';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { ModPatientComponent } from './admin/mod-patient/mod-patient.component';
import { ModDoctorComponent } from './admin/mod-doctor/mod-doctor.component';
import { ReceptionHomeComponent } from './reception/reception-home/reception-home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DoctorComponent,
    ReceptionComponent,
    FutureComponent,
    PostLoginComponent,
    RequestsComponent,
    TodayComponent,
    AdminhomeComponent,
    ModPatientComponent,
    ModDoctorComponent,
    ReceptionHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
