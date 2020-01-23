import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeService } from '../home.service';
import { Doctors, Login } from '../models';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  username: string;
  password: string;
  status: string;
  statusFlag: boolean;
  constructor(private router: Router, private home: AppComponent, private homeService: HomeService) {
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.username !== '') {
      if (this.password !== '') {
        const doctor = new Login();
        doctor.login_id = this.username;
        doctor.login_password = this.password;
        this.homeService.doctorLogin(doctor).subscribe(
          (data: any) => {
            this.homeService.setDoctor(data);
            this.home.login();
            this.router.navigate(['/doclogin']);
          },
          (error: any) => {
            this.statusFlag = true;
            this.status = 'Invalid Id or Password';
          }
        );
      } else {
        this.statusFlag = true;
        this.status = ' Enter password';
      }
    } else {
      this.statusFlag = true;
      this.status = ' Enter Id & Password';
    }
  }
}
