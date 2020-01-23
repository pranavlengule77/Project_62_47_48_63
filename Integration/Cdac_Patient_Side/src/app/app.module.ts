import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BodyComponent } from './body/body.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { PostLoginComponent } from './post-login/post-login.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { CancelAppointmentComponent } from './cancel-appointment/cancel-appointment.component';
import { BodyCarouselComponent } from './body-carousel/body-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    BodyComponent,
    SpecialitiesComponent,
    AboutUsComponent,
    RegisterComponent,
    PostLoginComponent,
    BookAppointmentComponent,
    CancelAppointmentComponent,
    BodyCarouselComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
