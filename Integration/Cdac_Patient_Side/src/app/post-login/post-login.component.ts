import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointmentclass } from '../appointmentclass';
import { UserHomeserviceService } from '../user-homeservice.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private fdata: UserHomeserviceService, private home: AppComponent) { }
  data: Array<Appointmentclass>;
  ngOnInit() {
    this.fdata.getAllAppointdetails(this.home.patientData).subscribe(
      (data: any) => {
        this.data = data;
        console.log(data);
        console.log(this.data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  bookAppointment() {
    this.router.navigate(['speciality'], {relativeTo: this.route.parent});
  }

  cancelAppointment() {
    this.router.navigate(['cancelapp'], {relativeTo: this.route.parent});
  }

}
