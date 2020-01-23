import { Component, OnInit } from '@angular/core';
import { Appointmentclass } from '../appointmentclass';
import { Doctormapping } from '../doctormapping';
import { UserHomeserviceService } from '../user-homeservice.service';
import { SpecialitiesComponent } from '../specialities/specialities.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  static doctorAppointment: Doctormapping;
  doctor: Doctormapping;
  data: Array<Appointmentclass>;
  fetcheddata: Array<Doctormapping>;
  sdata: SpecialitiesComponent;
  appointmentDate: Date;
  status: string;
  statusFlag: boolean;

  constructor(private fdata: UserHomeserviceService, private home: AppComponent) { }

  ngOnInit() {
    this.reminderGetAppointmentDetails();
    this.doctor = BookAppointmentComponent.doctorAppointment;
  }

  reminderGetAppointmentDetails() {
    this.fdata.getAllAppointdetails(this.home.patientData).subscribe(
      (data: any) => {
        this.data = data;
      },
      (error: any) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  onSubmit() {
    const newAppointment = new Appointmentclass();
    newAppointment.appointment_date = this.appointmentDate;
    newAppointment.doctor_id = this.doctor.doctor_id;
    newAppointment.doctor_name = this.doctor.doctor_name;
    newAppointment.mobile_no = this.home.patientData.mobile_no;
    console.log(newAppointment);
    this.fdata.bookAppointment(newAppointment).subscribe(
      (data: any) => {
        this.statusFlag = true;
        this.status = 'Your appointment request is sent!. Please wait for the doctor to confirm';
        setTimeout (() => { this.ngOnInit();}, 2000);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
