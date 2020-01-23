import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogoutShown: boolean;
  isNavbarShown: boolean;
  title = 'CDAC-Project-Doctor';
  /**
   *
   */
  constructor(private router: Router) {
    this.isLogoutShown=false;
    this.isNavbarShown = true;
  }

  ngOnInit() {
    this.router.navigate(['']);
  }

  public logout(){
    if(this.isLogoutShown){
      this.isLogoutShown=false;
      this.isNavbarShown=true;
    }
    this.router.navigate(['']);
  }
  public login(){
    this.isLogoutShown=true;
    this.isNavbarShown=false;
  }
}
