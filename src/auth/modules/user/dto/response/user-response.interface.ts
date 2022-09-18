import {UserRolesEnum} from "../../enums";

export interface UserResponseInterface<TUserPhone>  {
    readonly id: number;
    readonly name: string,
    readonly email: string,
    readonly phones?: TUserPhone[],
    readonly telegram?: string,
    readonly position?: string,
    readonly avatar?: string,
    readonly roles?: UserRolesEnum[],
    readonly created_at?: string,
}