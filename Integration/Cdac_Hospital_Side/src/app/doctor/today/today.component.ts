import { Component, OnInit } from '@angular/core';
import { AppointmentData } from 'src/app/models';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayData: Array<AppointmentData>;
  found: boolean;
  statusFlag: boolean;
  message: string;
  status: string;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    let doctor_id = this.homeService.getDoctor().doctor_id;
    this.homeService.getTodayAppointment(doctor_id).subscribe(
      (data: any) => {
        if ((data.length > 0)) {
          this.todayData = data;
          this.found = true;
          this.statusFlag = false;
        } else {
          this.found = false;
          this.statusFlag = true;
          this.message = "You don't have any appointments for today! Relax.";
        }
      },
      (error: any) => {
        this.found = false;
        this.statusFlag = true;
        this.message = "Server is under maintainance!";
      }
    );
  }

  cancelAppointment(_appointmentId) {
    if (confirm(("Do you want to cancel " + _appointmentId + "'s Appointment? "))) {
      let temp = new AppointmentData();
      temp.appointment_id = _appointmentId;
      this.homeService.cancelAppointment(temp).subscribe(
        (data: any) => {
          this.found = true;
          this.statusFlag = false;
          this.status = "Deleted Successfully";
          setTimeout(() => { this.ngOnInit(); } , 5000);
        },
        (error: any) => {
          this.found = false;
          this.statusFlag = true;
          this.message = "Server is under maintainance!";
        }
      );
    }
  }

  startAppointment(_appointmentId) {
    document.getElementById('buttonStart' + _appointmentId).style.display = 'none';
    var display = document.querySelector('#time' + _appointmentId);
    this.startTimer(display);
    setTimeout(() => {
      let temp = new AppointmentData();
      temp.appointment_id = _appointmentId;
      this.homeService.completedAppointment(temp).subscribe(
        (data: any) => {
          this.found = true;
          this.statusFlag = false;
          this.status = "Completed " + data.appointment_id +"!";
          this.ngOnInit();
        },
        (error: any) => {
          this.found = false;
          this.statusFlag = true;
          this.message = "Server is under maintainance!";
        }
      );
    }, 900000);
  }

  private startTimer(display) {
    var duration = 60 * 15;
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
