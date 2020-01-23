import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Appointmentclass } from '../appointmentclass';
import { UserHomeserviceService } from '../user-homeservice.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private fdata: UserHomeserviceService) { }
  data: Array<Appointmentclass>;
  ngOnInit() {
    this.reminderGetAppointmentDetails();
  }

  bookAppointment() {
    this.router.navigate(['speciality'], {relativeTo: this.route.parent});
  }

  cancelAppointment() {
    this.router.navigate(['cancelapp'], {relativeTo: this.route.parent});
  }

  reminderGetAppointmentDetails() {
    this.data = this.fdata.getAllAppointdetails();
  }

}
