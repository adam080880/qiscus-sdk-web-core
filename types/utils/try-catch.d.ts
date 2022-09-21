import * as model from '../model';
export declare const tryCatch: <T>(fn: () => T, default_: T, onError?: ((error: Error) => void) | undefined, onSuccess?: ((resp: T) => void) | undefined) => T;
export declare const wrapP: <T>(promise: Promise<T>) => Promise<any[] | (T | null)[]>;
export declare const getOrThrow: <T>(item: T | null | undefined, msg: string) => T;
export declare const isChatRoom: <T extends unknown>(data: model.IQChatRoom | T) => data is model.IQChatRoom;
