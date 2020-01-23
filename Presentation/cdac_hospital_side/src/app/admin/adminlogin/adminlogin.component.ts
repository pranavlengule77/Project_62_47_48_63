import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Admin } from '../admin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  username:string;
  password:string;
  status:string;
  loginStatus: boolean;
  admin : Admin
  constructor(private router: Router, private home:AppComponent) {
    this.admin = new Admin();
   }

  ngOnInit() {
  }

  onSubmit(){
    this.loginStatus = this.admin.login(this.username,this.password);
    if(this.loginStatus){
        this.router.navigate(['adminhome']);
        this.home.login();
    }
    else{
      this.status = "Invalid Email/Password";
    }
  }

}
