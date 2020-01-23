import { Component, OnInit } from '@angular/core';
import { UserHomeserviceService } from '../user-homeservice.service';
import { Registration } from '../registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  [x: string]: any;

  registerData: Array<Registration>;

  constructor(private rdata: UserHomeserviceService) { }

  ngOnInit() {
  }

  registration() {
    alert('Registration Successful!');
  }

}
