import { Component, OnInit } from '@angular/core';
import { UserHomeserviceService } from '../user-homeservice.service';
import { Appointmentclass } from '../appointmentclass';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})
export class CancelAppointmentComponent implements OnInit {

  patientAppointments: Array<Appointmentclass>;

  constructor(private home: AppComponent, private homeService: UserHomeserviceService) {
  }

  ngOnInit() {
    this.homeService.getAllAppointdetails(this.home.patientData).subscribe(
      (data: any) => {
        this.patientAppointments = data;
      },
      (error: any) => {
        console.log(JSON.stringify(error));
      }
    );
  }
  // tslint:disable-next-line: variable-name
  cancelAppointment(_appointment: Appointmentclass) {
    if (confirm('Do you want to cancel ' + _appointment.appointment_id)) {
      this.homeService.cancelAppointment(_appointment).subscribe(
        (data: any) => {
          alert('Appointment cancelled!');
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
