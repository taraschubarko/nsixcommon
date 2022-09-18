export  interface UserAuthUpdateRequestInterface<TUserPhone> {
    readonly password?: string;
    readonly password_confirmation?: string;
    readonly phones?: TUserPhone[];
    readonly telegram?: string;
}