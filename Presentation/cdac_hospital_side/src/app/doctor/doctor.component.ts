import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Doctor } from './doctor';
import { User } from '../user';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  username:string;
  password:string;
  status:string;
  doctor:Doctor;
  loginstatus:boolean;
  constructor(private router: Router, private home:AppComponent) {
    this.doctor = new Doctor();
   }

  ngOnInit() {
  }
  onSubmit(){
    this.loginstatus = this.doctor.login(this.username,this.password);
    if(this.loginstatus){
      
        this.router.navigate(['/doclogin']);
        this.home.login();
      
    }
    else{
      this.status = "Invalid Email/Password";
    }
  }

}
