import { User } from '../user';
import { Login } from '../login';
import { ReceptionLogin } from '../hospitalLogin/reception';
import { Home } from '../home.service';

export class Reception implements User {
    loginUser: Login;
    private home: Home;
    /**
     *
     */
    constructor() {
        this.loginUser = new ReceptionLogin();
        this.home = new Home();
    }

    login(_username: string, _password: string): boolean {
        return this.loginUser.login(_username, _password);
    }

    getPatient(_appointmentId:number){
        return this.home.getPatient(_appointmentId);
    }
}
