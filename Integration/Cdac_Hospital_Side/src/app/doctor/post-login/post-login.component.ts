import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {

  constructor(private homePage: AppComponent, private router: Router, private route: ActivatedRoute) {
    this.homePage.isLogoutShown = true;
   }

  ngOnInit() {
    this.router.navigate([{ outlets: { sidebaroutlet: ['today']}}],{relativeTo:this.route});
  }

}
