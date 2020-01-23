import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { HomeService } from '../home.service';
import { Login } from '../models';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  username: string;
  password: string;
  status: string;
  statusFlag: boolean;
  constructor(private router: Router, private home: AppComponent, private homeService: HomeService) {
  }

  ngOnInit() {
  }
  onSubmit() {
    if (this.username != "") {
      if (this.password != "") {
        let reception = new Login();
        reception.login_id = this.username;
        reception.login_password = this.password;
        this.homeService.receptionLogin(reception).subscribe(
          (data: any) => {
            this.home.login();
            this.router.navigate(['receptionhome']);
          },
          (error: any) => {
            this.statusFlag = true;
            this.status = "Invalid Id or Password";
          }
        );
      } else {
        this.statusFlag = true;
        this.status = " Enter password";
      }
    } else {
      this.statusFlag = true;
      this.status = " Enter Id & Password";
    }
  }

}
