import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models';
import { Home } from 'src/app/home.service';
import { Doctor } from '../doctor';
import { FutureComponent } from '../future/future.component';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requestData: Array<Patients>;
  doctor: Doctor;
  confirmation: string;
  confirmFlag: boolean;
  constructor() { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.requestData = this.doctor.getRequests();
  }

  confirmAppointmentRequests(_appointmentId) {
    var temp = new FutureComponent();
    this.confirmFlag = this.doctor.confirmAppointmentRequest(_appointmentId)
    if (this.confirmFlag) {
      this.confirmation = "Appointment Confirmed";
    } else {
      this.confirmation = "Appointment Not Confirmed";
    }
  }
  cancelAppointmentRequest(_appointmentId) {

    if (confirm(("Do you want to cancel " + _appointmentId + "'s Appointment? "))) {
      this.doctor.cancelAppointmentRequest(_appointmentId);
      alert("Deleted Successfully");
    }
  }
}