import { Component, OnInit } from '@angular/core';
import { Patients } from 'src/app/models';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-mod-patient',
  templateUrl: './mod-patient.component.html',
  styleUrls: ['./mod-patient.component.css']
})
export class ModPatientComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  mobile_no: number;
  // tslint:disable-next-line: no-inferrable-types
  found: boolean = false;
  // tslint:disable-next-line: no-inferrable-types
  messageFlag: boolean = false;
  patient: Patients;
  patientName: string;
  message: string;
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
  }

  search() {
    this.homeService.searchPatientAdmin(this.mobile_no).subscribe(
      (data: any) => {
        this.patient = data;
        this.found = true;
        this.messageFlag = false;
      },
      (error: any) => {
        this.found = false;
        this.messageFlag = true;
        this.message = 'Patient Not Found!';
      }
    );
  }

  delete() {
    this.messageFlag = false;
    this.homeService.deletePatient(this.patient).subscribe(
      (data: any) => {
        this.messageFlag = true;
        this.message = 'Patient data deleted successfully!';
      },
      (error: any) => {
        this.messageFlag = true;
        this.message = 'Server is under maintainance!';
      }
    );
  }

}
