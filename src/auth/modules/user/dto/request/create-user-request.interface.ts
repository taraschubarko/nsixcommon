import { UserRolesEnum } from '../../enums';

export interface CreateUserRequestInterface {
    readonly name: string,
    readonly email: string,
    readonly password: string,
    readonly role: UserRolesEnum[],
}