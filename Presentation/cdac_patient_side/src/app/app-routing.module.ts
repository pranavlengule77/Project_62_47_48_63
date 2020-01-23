import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import { BodyComponent } from './body/body.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { PostLoginComponent } from './post-login/post-login.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'feed',
    component: FeedbackComponent
  },
  {
    path: 'speciality',
    component: SpecialitiesComponent
  },
  {
    path: 'registration',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: PostLoginComponent
  },
  {
    path: 'bookapp',
    component: BookAppointmentComponent,
    data: { requiresLogin: true }
  },
  {
    path: 'cancelapp',
    component: CancelAppointmentComponent
  },
  {
    path: 'profile',
    component: UserComponent
  },
  {
    path: '',
    component: BodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
