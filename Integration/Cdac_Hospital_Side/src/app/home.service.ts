import { Injectable } from '@angular/core';
import { Patients, Doctors, Login, AppointmentData } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class HomeService {

  urlMain = 'http://localhost:9001/api/';
  doctor: Doctors;

  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line: variable-name
  updateDoctor(_doctor: Doctors): Observable<any> {
     const url = this.urlMain + 'admin/managedoctors/updatedoctor';
     return this.http.post(url, _doctor);
  }

  // tslint:disable-next-line: variable-name
  searchDoctor(_doctorId: string): Observable<any> {
    const url = this.urlMain + 'admin/searchdoctor/?doctor_id=' + _doctorId;
    return this.http.get(url);
  }
  // tslint:disable-next-line: variable-name
  deletePatient(_patient: Patients): Observable<any> {
    const url = this.urlMain + '/admin/deletepatients';
    return this.http.post(url, _patient);
  }

  // tslint:disable-next-line: variable-name
  searchPatientAdmin(_mobile_no: number): Observable<any> {
    const url = this.urlMain + 'admin/searchPatient/?mobile_no=' + _mobile_no;
    return this.http.get(url);
  }

  // tslint:disable-next-line: variable-name
  searchPatientReception(_appointmentId: string): Observable<any> {
    const url = this.urlMain + 'reception/search/?appointment_id=' + _appointmentId;
    return this.http.get(url);
  }

  // tslint:disable-next-line: variable-name
  getTodayAppointment(_doctorId: string): Observable<any> {
    const url = this.urlMain + 'doctor/today?doctor_id=' + _doctorId;
    return this.http.get(url);
  }

  // tslint:disable-next-line: variable-name
  getFutureAppointment(_doctorId: string): Observable<any> {
    const url = this.urlMain + 'doctor/future?doctor_id=' + _doctorId;
    return this.http.get(url);
  }

  // tslint:disable-next-line: variable-name
  getAppointmentRequests(_doctorId: string): Observable<any> {
    const url = this.urlMain + 'doctor/requests?doctor_id=' + _doctorId;
    return this.http.get(url);
  }

  // tslint:disable-next-line: variable-name
  cancelAppointment(_appointment: AppointmentData): Observable<any> {
    const url = this.urlMain + 'doctor/cancel';
    return this.http.post(url, _appointment);
  }

  // tslint:disable-next-line: variable-name
  confirmAppointmentRequest(_appointmentId): Observable<any> {
    const url = this.urlMain + 'doctor/confirm/?appointment_id=' + _appointmentId;
    return this.http.get(url);
  }

  // tslint:disable-next-line: variable-name
  completedAppointment(_appointment: AppointmentData): Observable<any> {
    const url = this.urlMain + 'patients/cancelappointment';
    return this.http.post(url, _appointment);
  }

  // tslint:disable-next-line: variable-name
  doctorLogin(_doctor: Login): Observable<any> {
    const url = this.urlMain + 'doctor/login';
    return this.http.post(url, _doctor);
  }

  // tslint:disable-next-line: variable-name
  adminLogin(_admin: Login): Observable<any> {
    const url = this.urlMain + 'admin/login';
    return this.http.post(url, _admin);
  }

  // tslint:disable-next-line: variable-name
  receptionLogin(_reception: Login): Observable<any> {
    const url = this.urlMain + 'reception/login';
    return this.http.post(url, _reception);
  }

  // tslint:disable-next-line: variable-name
  setDoctor(_doctor: Doctors) {
    this.doctor = _doctor;
  }
  getDoctor() {
    return this.doctor;
  }
}
