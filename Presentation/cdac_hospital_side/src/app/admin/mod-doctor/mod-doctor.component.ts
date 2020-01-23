import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/models';
import { Admin } from '../admin';

@Component({
  selector: 'app-mod-doctor',
  templateUrl: './mod-doctor.component.html',
  styleUrls: ['./mod-doctor.component.css']
})
export class ModDoctorComponent implements OnInit {

  doctorId: string;
  doctor: Doctors;
  admin: Admin;
  constructor() {
    this.admin = new Admin();
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.admin.updateDoctor(this.doctor)){
      console.log("Updated successfully");
    }else{
      console.log("Failed");
    }
    
  }
  search() {
    this.doctor = this.admin.searchDoctor(this.doctorId);
  }

}
