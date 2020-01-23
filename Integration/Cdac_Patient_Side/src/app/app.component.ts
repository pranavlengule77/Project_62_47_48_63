import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Registration } from './registration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogoutShown: boolean;
  isNavbarShown: boolean;
  title = 'CDAC-Project-Angular';
  patientData: Registration;


  constructor(private router: Router, private route: ActivatedRoute) {
    this.isLogoutShown = false;
    this.isNavbarShown = true;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.router.navigate(['']);
  }

  public logout() {
    if (this.isLogoutShown) {
      this.isLogoutShown = false;
      this.isNavbarShown = true;
    }
    this.patientData = null;
    this.router.navigate(['']);
  }

  // tslint:disable-next-line: variable-name
  public login(_patientData) {
    this.isLogoutShown = true;
    this.isNavbarShown = false;
    this.patientData = _patientData;
  }

  public checkLogin() {
    return this.patientData != null;
  }

}
