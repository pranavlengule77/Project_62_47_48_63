import { Injectable } from '@angular/core';
import { Patients } from './patients';
import { Doctormapping } from './doctormapping';
import { Appointmentclass } from './appointmentclass';
import { Registration } from './registration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserHomeserviceService {
  urlMain = 'http://localhost:9001/api';


  cancelData: Array<Patients> = [
    {
      AppointmentId: 101,
      DoctorName: 'Dr. Omkar Nate',
      TimeSlot: '10:30',
      Date: new Date(2020, 1, 6, 12, 30)
    },
    {
      AppointmentId: 102,
      DoctorName: 'Dr. Debarshi Pal',
      TimeSlot: '17:00',
      Date: new Date(2020, 0, 22, 12, 30)
    },
    {
      AppointmentId: 103,
      DoctorName: 'Dr. Lalit Mahajan',
      TimeSlot: '13:40',
      Date: new Date(2020, 0, 29, 12, 30)
    }
  ];

  constructor(private http: HttpClient) { }

  bookAppointment(_appointment: Appointmentclass): Observable<any> {
    const url = this.urlMain + '/patients/appointmentreq';
    return this.http.post(url, _appointment);
  }

  updateProfile(_patient: Registration): Observable<any> {
    const url = this.urlMain + '/patients/updateprofile';
    return this.http.post(url, _patient);
  }

  cancelAppointment(_appointment: Appointmentclass): Observable<any> {
    const url = this.urlMain + '/patients/cancelappointment';
    return this.http.post(url, _appointment);
  }

  setTime(hrs: number, min: number) {
    const x = new Date();
    x.setHours(hrs, min);
    return x;
  }

  getAllAppointdetails(_patient): Observable<any> {
   const url = this.urlMain + '/patients/appointments';
   return this.http.post(url, _patient);

  }

  patient_login(patient: Registration): Observable<any> {
    const url = this.urlMain +'/patients/login';
    return this.http.post(url, patient);
  }
  
  get_Speciality(speciality_name: string): Observable<any> {
    const url = this.urlMain + '/specialities_view/speciality/' + '?speciality_name=' + speciality_name;
    return this.http.get(url);
  }

  registerNewPatient(_newPatient: Registration): Observable <any> {
    const url = this.urlMain + '/patients/newpatient';
    return this.http.post(url, _newPatient);
  }
}
