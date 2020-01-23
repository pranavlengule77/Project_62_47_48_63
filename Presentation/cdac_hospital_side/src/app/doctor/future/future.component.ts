import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models';
import { Home } from 'src/app/home.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  futureData: Array<Patients>;
  doctor: Doctor;

  constructor() { }

  ngOnInit() {
    this.doctor = new Doctor();
    this.futureData = this.doctor.getFuture();
  }
  cancelAppointment(_appointmentId) {
    if (confirm(("Do you want to cancel " + _appointmentId + "'s Appointment? "))) {
      this.doctor.cancelFutureAppointment(_appointmentId);
      alert("Deleted Successfully");
    }
  }
}
