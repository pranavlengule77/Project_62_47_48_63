import { Login } from '../login';

export class ReceptionLogin implements Login {
    // login(_username: string, _password: string): boolean {
    //     console.log("hello3")
    // }
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
            console.log("Logged In");
            return true;
        }
        else {
            console.log("failed");
            return false;
        }
    }

    logout(): void {
        console.log("logged out");
    }
}
