import { Login } from '../login';

export class DoctorLogin implements Login {
    private username: string;
    private password: string;
    /**
     *
     */
    constructor() {
        this.username = "a@b.com";
        this.password = "abc";
    }

    login(_username: string, _password: string): boolean {
        if (this.username === _username && this.password === _password) {
            return true;
        }
        else {
            return false;
        }
    }

    logout(): void {
        console.log("logged out");
    }
}
