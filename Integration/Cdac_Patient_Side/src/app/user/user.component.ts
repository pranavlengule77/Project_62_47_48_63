import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { AppComponent } from '../app.component';
import { UserHomeserviceService } from '../user-homeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  oldPatient: Registration;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  birthDate: string;
  constructor(private home: AppComponent, private homeService: UserHomeserviceService, private router: Router) {
    this.oldPatient = this.home.patientData;
    this.birthDate = (new Date(this.oldPatient.dob).toDateString());
    console.log(this.oldPatient.dob);
   }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.oldPassword);
    console.log(this.oldPatient.password);
    if (this.oldPassword === this.oldPatient.password) {
      if (this.newPassword === this.confirmPassword) {
        this.oldPatient.password = this.newPassword;
        this.homeService.updateProfile(this.oldPatient).subscribe(
          (data: any) => {
            alert('Profile Updated Successfully!');
            this.home.logout();
          },
          (error: any) => {
            console.log(error);
          }
        )
      } else {
        alert('New passwords doesn\'t match!');
      }
    } else {
      alert('Please enter correct password!');
    }
  }

}
