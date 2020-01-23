import { Component, OnInit } from '@angular/core';
import { Patients, AppointmentData } from 'src/app/models';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-reception-home',
  templateUrl: './reception-home.component.html',
  styleUrls: ['./reception-home.component.css']
})
export class ReceptionHomeComponent implements OnInit {
  appointment: AppointmentData;
  appointmentId: string;
  searchFlag: boolean;
  notFoundFlag: boolean;
  // tslint:disable-next-line: no-inferrable-types
  notFound: string = 'Patient doesn\'t have an appointment';

  constructor(private homeService: HomeService) {

  }

  ngOnInit() {
  }
  searchPatient() {
    this.homeService.searchPatientReception(this.appointmentId).subscribe(
      (data: any) => {
        this.notFoundFlag = false;
        this.searchFlag = true;
        this.appointment = data;
      },
      (error: any) => {
        this.searchFlag = false;
        this.notFoundFlag = true;
      }
    );
  }

}
