import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppComponent } from '../app.component';
import { UserHomeserviceService } from '../user-homeservice.service';
import { error } from 'util';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
 username: string;
  mobileNo: number;
  password: string;
  status: string;

  constructor(private router: Router, private home: AppComponent, private homeService: UserHomeserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username === 'pranav@gmail.com') {
      if (this.password === 'pranav123') {
        console.log('Login Successfull');
        this.router.navigate(['user']);
        this.home.login();
      }
    } else {
      console.log('Login Failed');
      this.status = 'Invalid Login or Password';
    }
    // console.log('hello');
    // const patientData = JSON.stringify({
    //   id: this.mobileNo, password: this.password
    // });
    // this.homeService.patient_login(this.mobileNo).subscribe(
    //   (data: any) => {
    //     console.log(data);
    //   // tslint:disable-next-line: no-shadowed-variable
    //   }, (error: any) => {
    //     console.log(error);
    //   }
    // );
    // if (this.homeService.patient_login(this.mobileNo, this.password)) {
    //   this.router.navigate(['user']);
    //   this.home.login();
    // } else {
    //   this.status = 'Invalid Login or Password';
    // }
  }

}
