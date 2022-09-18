export interface LoginRequestInterface {
    readonly email: string;
    readonly password: string;
    readonly remember: boolean;
}