import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  isLogoutShown: boolean;
  isNavbarShown: boolean;
  title = 'CDAC-Project-Angular';

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
    this.router.navigate(['']);
  }

  public login() {
    this.isLogoutShown = true;
    this.isNavbarShown = false;
  }

}
