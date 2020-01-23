import { Component, OnInit } from '@angular/core';
import { AppointmentData } from 'src/app/models';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requestData: Array<AppointmentData>;
  confirmation: string;
  found: boolean;
  statusFlag: boolean;
  message: string;
  status: string;
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    const doctor_id = this.homeService.getDoctor().doctor_id;
    this.homeService.getAppointmentRequests(doctor_id).subscribe(
      (data: any) => {
        if (data.length > 0) {
          this.found = true;
          this.statusFlag = false;
          this.requestData = data;
        } else {
          this.statusFlag = true;
          this.found = false;
          this.confirmation = 'You have no appointment requests!';
          this.message = 'You don\'t have any appointment request yet !';
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
  confirmAppointmentRequests(_appointmentId) {
    if (confirm('Do you want to confirm the appointment?')) {
      this.homeService.confirmAppointmentRequest(_appointmentId).subscribe(
        (data: any) => {
          this.confirmation = 'Appointment Confirmed';
          this.ngOnInit();
        },
        (error: any) => {
          this.found = false;
          this.statusFlag = true;
          this.confirmation = 'Appointment Not Confirmed';
        }
      );
    }
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
