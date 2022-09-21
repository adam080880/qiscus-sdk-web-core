import { IQUser } from './model';
import { loginOrRegisterParams } from './api';
export declare const loginOrRegister: (o: loginOrRegisterParams) => {
    email: string;
    password: string;
    username: string | undefined;
    avatar_url: string | undefined;
    device_token: string | undefined;
    extras: Record<string, unknown> | undefined;
};
export declare const verifyIdentityToken: (o: {
    identityToken: string;
}) => {
    identity_token: string;
};
export declare const patchProfile: (u: Partial<IQUser>) => {
    name: string | undefined;
    avatar_url: string | undefined;
    extras: Record<string, unknown> | undefined;
};
export declare const userRooms: () => {};
