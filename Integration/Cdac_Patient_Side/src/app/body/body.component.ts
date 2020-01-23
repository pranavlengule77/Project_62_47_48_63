import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { UserHomeserviceService } from '../user-homeservice.service';
import { error } from 'util';
import { Registration } from '../registration';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mobileNo: number;
  password: string;
  status: string;
  patient: Registration;
  statusFlag: boolean;

  constructor(private router: Router, private home: AppComponent, private homeService: UserHomeserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('hello');
    const patient = new Registration();
    patient.mobile_no = this.mobileNo;
    patient.password = this.password;
    this.homeService.patient_login(patient).subscribe(
      (data: any) => {
        console.log(data);
        this.patient = data;
        this.router.navigate(['user']);
        this.home.login(this.patient);
      // tslint:disable-next-line: no-shadowed-variable
      }, (error: any) => {
        this.statusFlag = true;
        this.status = 'Invalid Login or Password';
        console.log(error);
      }
    );
  }

}
