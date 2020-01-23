import { Component, OnInit } from '@angular/core';
import { Doctors } from 'src/app/models';
import { HomeService } from 'src/app/home.service';

@Component({
  selector: 'app-mod-doctor',
  templateUrl: './mod-doctor.component.html',
  styleUrls: ['./mod-doctor.component.css']
})
export class ModDoctorComponent implements OnInit {

  doctorId: string;
  doctor: Doctors;
  // tslint:disable-next-line: no-inferrable-types
  searchFlag: boolean = false;
  message: string;
  found: boolean;
  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.homeService.updateDoctor(this.doctor).subscribe(
      (data: any) => {
        this.ngOnInit();
        this.searchFlag = true;
        this.found = false;
        this.message = 'Doctor data updated successfully!';
      },
      (error: any) => {
        this.searchFlag = true;
        this.found = false;
        this.message = 'Server is under maintainance!';
        this.doctor = null;
      }
    );
  }
  search() {
    this.homeService.searchDoctor(this.doctorId).subscribe(
      (data: any) => {
        this.doctor = data;
        this.searchFlag = false;
        this.found = true;
      },
      (error: any) => {
        this.searchFlag = true;
        this.found = false;
        this.message = 'Doctor Data Not Found!';
      }
    );
  }

}
