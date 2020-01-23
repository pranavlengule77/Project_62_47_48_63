import { Component, OnInit } from '@angular/core';
import { Doctormapping } from '../doctormapping';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHomeserviceService } from '../user-homeservice.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent implements OnInit {
  [x: string]: any;
  fetcheddata: Array<Doctormapping>;

  constructor(private data: UserHomeserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.generalcall();
  }

  generalcall() {
    this.fetcheddata = this.data.general();
  }

  entcall() {
    this.fetcheddata = this.data.ent();
  }

  neurologycall() {
    this.fetcheddata = this.data.neurology();
  }

  nephrologycall() {
    this.fetcheddata = this.data.nephrology();
  }

  pulmonologycall() {
    this.fetcheddata = this.data.pulmonology();
  }

  urologycall() {
    this.fetcheddata = this.data.urology();
  }

  anaescall() {
    this.fetcheddata = this.data.anaesthesiology();
  }

  bookAppointment() {
      this.router.navigate(['bookapp'], {relativeTo: this.route.parent});
    }
}
