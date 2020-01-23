import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models';
import { Home } from 'src/app/home.service';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayData: Array<Patients>;
  doctor: Doctor;

  constructor() {
  }

  ngOnInit() {
    this.doctor= new Doctor();
    this.todayData = this.doctor.getTodayAppointment();
  }

  cancelAppointment(_appointmentId) {
    if (confirm(("Do you want to cancel " + _appointmentId + "'s Appointment? "))) {
      this.doctor.cancelTodayAppointment(_appointmentId);
      alert("Deleted Successfully");
    }
  }

  startAppointment(_appointmentId) {
    document.getElementById('buttonStart' + _appointmentId).style.display = 'none';
    var display = document.querySelector('#time' + _appointmentId);
    this.startTimer(display);
    setTimeout(() => {
      this.doctor.startPatientSession(_appointmentId);
    }, 60000);
  }

  private startTimer(display) {
    var duration = 60 * 1;
    var timer = duration, minutes, seconds;
    var appointmentTimer = setInterval(function () {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
      }
      if (timer == 0) {
        stopTimer();
      }
    }, 1000);
    function stopTimer() {
      clearInterval(appointmentTimer);
    }
  }

}
