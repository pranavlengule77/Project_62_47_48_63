import { Login } from '../login';
import { User } from '../user';
import { DoctorLogin } from '../hospitalLogin/doctor';
import { Home } from '../home.service';

export class Doctor implements User {
  loginUser: Login;
  home: Home;
  /**
   *
   */
  constructor() {
    this.home = new Home();
    this.loginUser = new DoctorLogin();
  }

  login(_username: string, _password: string): boolean {
    return this.loginUser.login(_username, _password);
  }

  getTodayAppointment(){
    return this.home.getToday();
  }

  cancelTodayAppointment(_appointmentId){
    return this.home.cancelTodayAppointment(_appointmentId);
  }

  startPatientSession(_appointmentId){
    this.home.startPatientSession(_appointmentId);
  }

  getRequests(){
    return this.home.getRequests();
  }

  getFuture(){
    return this.home.getFuture();
  }

  cancelFutureAppointment(_appointmentId){
    this.home.cancelFutureAppointment(_appointmentId);
  }

  confirmAppointmentRequest(_appointmentId){
    return this.home.confirmAppointmentRequest(_appointmentId);
  }

  cancelAppointmentRequest(_appointmentId){
    return this.home.cancelAppointmentRequest(_appointmentId);
  }
}
