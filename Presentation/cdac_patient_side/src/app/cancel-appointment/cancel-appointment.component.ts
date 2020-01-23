import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/patients';
import { UserHomeserviceService } from '../user-homeservice.service';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.component.html',
  styleUrls: ['./cancel-appointment.component.css']
})
export class CancelAppointmentComponent implements OnInit {

  cancelData: Array<Patients>;

  constructor(private data: UserHomeserviceService) {
  }

  ngOnInit() {
    this.cancelData = this.data.getCancelData();
  }

  cancelPatientAppointment(AppointmentId) {
    if (confirm (('Do you want to cancel the Appointment ?'))) {
      this.data.cancelAppointment(AppointmentId);
      alert('Deleted Successfully');
    }
  }
}
