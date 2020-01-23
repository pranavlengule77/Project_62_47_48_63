import { Component, OnInit } from '@angular/core';
import { UserHomeserviceService } from '../user-homeservice.service';
import { Registration } from '../registration';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newPatient: Registration;
  confirmPassword: string;
  registerData: Array<Registration>;

  constructor(private homeService: UserHomeserviceService, private router: Router) { }

  ngOnInit() {
    this.newPatient = new Registration();
  }

  onSubmit() {
    if (this.newPatient.password === this.confirmPassword) {
      this.homeService.registerNewPatient(this.newPatient).subscribe(
        (data: any) => {
          alert('Registration Successfull!');
          this.router.navigate(['']);
        }
      );
    } else {
      console.log(this.newPatient.password + this.confirmPassword);
    }
  }

}
