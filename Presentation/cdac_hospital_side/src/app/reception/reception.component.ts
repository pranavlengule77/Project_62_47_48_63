import { Component, OnInit } from '@angular/core';
import { Reception } from './reception';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  username:string;
  password:string;
  status:string;
  reception:Reception;
  loginstatus:boolean;
  constructor(private router: Router, private home:AppComponent) {
    this.reception = new Reception();
   }

  ngOnInit() {
  }
  onSubmit(){
    this.loginstatus = this.reception.login(this.username, this.password);
    if(this.loginstatus){
      
        this.router.navigate(['receptionhome']);
        this.home.login();
      
    }
    else{
      this.status = "Invalid Email/Password";
    }
  }

}
