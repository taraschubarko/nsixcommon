import {UserResponseInterface} from "../../../user";
import {UserPhoneInterface} from "../request";

export interface InvitePasswordSaveResponseInterface {
    readonly access_token: string;
    readonly expiresIn: number;
    readonly user: UserResponseInterface<UserPhoneInterface>
}