import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HomeService } from 'src/app/home.service';
import { Login } from 'src/app/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string;
  password: string;
  status: string;
  statusFlag: boolean;

  constructor(private router: Router, private home: AppComponent, private homeService: HomeService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username !== '') {
      if (this.password !== '') {
        const admin = new Login();
        admin.login_id = this.username;
        admin.login_password = this.password;
        this.homeService.adminLogin(admin).subscribe(
          (data: any) => {
            this.home.login();
            this.router.navigate(['adminhome']);
          },
          (error: any) => {
            this.statusFlag = true;
            this.status = 'Invalid Id or Password';
          }
        );
      } else {
        this.statusFlag = true;
        this.status = ' Enter password';
      }
    } else {
      this.statusFlag = true;
      this.status = ' Enter Id & Password';
    }
  }

}
