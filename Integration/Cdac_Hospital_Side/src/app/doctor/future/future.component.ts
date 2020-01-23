import { Component, OnInit } from '@angular/core';
import { AppointmentData } from 'src/app/models';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  futureData: Array<AppointmentData>;
  found: boolean;
  statusFlag: boolean;
  message: string;
  status: string;

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    const doctor_id = this.homeService.getDoctor().doctor_id;
    this.homeService.getFutureAppointment(doctor_id).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.futureData = data;
          this.found = true;
          this.statusFlag = false;
        } else {
          this.found = false;
          this.statusFlag = true;
          this.message = 'You don\'t have any future appointments!';
        }
      },
      (error: any) => {
        this.found = false;
        this.statusFlag = true;
        this.message = 'Server is under maintainance!';
      }
    );
  }
  // tslint:disable-next-line: variable-name
  cancelAppointment(_appointmentId) {
    if (confirm(('Do you want to cancel ' + _appointmentId + '\'s Appointment? '))) {
      const temp = new AppointmentData();
      temp.appointment_id = _appointmentId;
      this.homeService.cancelAppointment(temp).subscribe(
        (data: any) => {
          this.status = 'Deleted Successfully';
          setTimeout(() => { this.ngOnInit(); }, 5000);
        },
        (error: any) => {
          this.found = false;
          this.statusFlag = true;
          this.message = 'Server is under maintainance!';
        }
      );
    }
  }
}
