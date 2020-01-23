import { User } from '../user';
import { Login } from '../login';
import { AdminLogin } from '../hospitalLogin/admin';
import { Doctors, Patients } from '../models';
import { Home } from '../home.service';

export class Admin implements User {
  loginUser: Login;
  home: Home;
  /**
   *
   */
  constructor() {
    this.home = new Home();
    this.loginUser = new AdminLogin();
  }

  login(_username: string, _password: string): boolean {
    return this.loginUser.login(_username, _password);
  }

  searchDoctor(_doctorId: string) {
    return this.home.searchDoctor(_doctorId);
  }
  updateDoctor(_doctor: Doctors) {
    return this.home.updateDoctor(_doctor);
  }
  searchPatient(_patienId: string) {
    return this.home.searchPatient(_patienId);
  }
  deletePatient(_patient:Patients){
    return this.home.deletePatient(_patient);
  }
}
