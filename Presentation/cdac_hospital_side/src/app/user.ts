import { Login } from './login';

export interface User {
    loginUser:Login;
    login(username:string, password:string):boolean;
}
