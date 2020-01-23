import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Patients } from 'src/app/models';

@Component({
  selector: 'app-mod-patient',
  templateUrl: './mod-patient.component.html',
  styleUrls: ['./mod-patient.component.css']
})
export class ModPatientComponent implements OnInit {
  patienNameSearch: string;
  found: boolean = false;
  admin: Admin;
  patient: Patients;
  patientName:string;
  constructor() {
    this.admin = new Admin();
  }

  ngOnInit() {
  }

  search() {
    this.patient = this.admin.searchPatient(this.patienNameSearch);
    if(this.patient!=null){
      this.found = true;
      this.patientName = this.patient.patientName;
    }
    else{
      console.log("Not Found");
    }
    
    
  }

  delete() {
    this.admin.deletePatient(this.patient);
    this.found=false;
    alert("Deleted Succesfully!");
  }

}
