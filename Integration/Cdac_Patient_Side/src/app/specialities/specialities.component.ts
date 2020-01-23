import { Component, OnInit } from '@angular/core';
import { Doctormapping } from '../doctormapping';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHomeserviceService } from '../user-homeservice.service';
import { AppComponent } from '../app.component';
import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  [x: string]: any;
  fetcheddata: Array<Doctormapping>;
  // tslint:disable-next-line: variable-name
  speciality_name: string;
  description: Text;
  loginStatus: boolean;

  constructor(private data: UserHomeserviceService, private router: Router, private route: ActivatedRoute, private home: AppComponent) {
    this.loginStatus = false;
  }

  ngOnInit() {
    this.generalcall();
    if (this.home.checkLogin()) {
      this.loginStatus = true;
    }
  }

  generalcall() {
    this.data.get_Speciality('GENERAL').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  entcall() {
    this.data.get_Speciality('ENT').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      }
    );
  }

  neurologycall() {
    this.data.get_Speciality('NEUROLOGY').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      });
  }

  nephrologycall() {
    this.data.get_Speciality('NEPHROLOGY').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      });
  }

  pulmonologycall() {
    this.data.get_Speciality('PULMONOLOGY').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      });
  }

  urologycall() {
    this.data.get_Speciality('UROLOGY').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      });
  }

  anaescall() {
    this.data.get_Speciality('ANAESTHESIOLOGY').subscribe(
      (data: any) => {
        this.fetcheddata = data;
        this.speciality_name = data[0].speciality_name;
        this.description = data[0].description;
      },
      (error) => {
        console.log(JSON.stringify(error));
      });
  }

  // tslint:disable-next-line: variable-name
  bookAppointment(_doctor: Doctormapping) {
    BookAppointmentComponent.doctorAppointment = _doctor;
    this.router.navigate(['bookapp'], { relativeTo: this.route.parent });
  }


}
