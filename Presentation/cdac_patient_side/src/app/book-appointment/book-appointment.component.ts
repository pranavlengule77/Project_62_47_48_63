import { Component, OnInit } from '@angular/core';
import { Appointmentclass } from '../appointmentclass';
import { Doctormapping } from '../doctormapping';
import { UserHomeserviceService } from '../user-homeservice.service';
import { SpecialitiesComponent } from '../specialities/specialities.component';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  constructor(private fdata: UserHomeserviceService) { }
  data: Array<Appointmentclass>;
  fetcheddata: Array<Doctormapping>;
  sdata: SpecialitiesComponent;
  ngOnInit() {
    this.reminderGetAppointmentDetails();
    this.generalcall();
  }

  reminderGetAppointmentDetails() {
    this.data = this.fdata.getAllAppointdetails();
  }

  generalcall() {
    this.fetcheddata = this.fdata.general();
  }

  entcall() {
    this.fetcheddata = this.fdata.ent();
  }

  neurologycall() {
    this.fetcheddata = this.fdata.neurology();
  }

  nephrologycall() {
    this.fetcheddata = this.fdata.nephrology();
  }

  pulmonologycall() {
    this.fetcheddata = this.fdata.pulmonology();
  }

  urologycall() {
    this.fetcheddata = this.fdata.urology();
  }

  anaescall() {
    this.fetcheddata = this.fdata.anaesthesiology();
  }

}
