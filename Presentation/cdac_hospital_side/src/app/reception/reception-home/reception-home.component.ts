import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models';
import { Home } from 'src/app/home.service';
import { Reception } from '../reception';

@Component({
  selector: 'app-reception-home',
  templateUrl: './reception-home.component.html',
  styleUrls: ['./reception-home.component.css']
})
export class ReceptionHomeComponent implements OnInit {
  patient: Patients;
  appointmentId: number;
  searchFlag: boolean;
  notFoundFlag: boolean;
  notFound: string = "Patient doesn't have an appointment";
  reception: Reception;
  constructor() { 
    
  }

  ngOnInit() {
    this.reception = new Reception();
  }
  searchPatient() {
    this.patient = this.reception.getPatient(this.appointmentId);
    if (this.patient === null) {
      this.searchFlag = false;
      this.notFoundFlag = true;
    } else {
      this.notFoundFlag = false;
      this.searchFlag = true;
    }
  }

}
