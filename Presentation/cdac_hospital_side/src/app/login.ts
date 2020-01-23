export interface Login {
    login(_username: string, _password: string): boolean;
    logout(): void;
}
