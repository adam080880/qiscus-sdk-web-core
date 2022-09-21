import { Storage } from './storage';
export declare const withHeaders: (s: Storage) => {
    headers: {
        'qiscus-sdk-app-id': string;
        'qiscus-sdk-version': string;
    };
};
export declare const withCredentials: (s: Storage) => {
    headers: {
        'qiscus-sdk-token': string;
        'qiscus-sdk-user-id': string;
        'qiscus-sdk-app-id': string;
        'qiscus-sdk-version': string;
    };
};
export declare const withBaseUrl: (s: Storage) => {
    baseUrl: string;
};
export declare const Provider: (s: Storage) => {
    withHeaders: {
        headers: {
            'qiscus-sdk-app-id': string;
            'qiscus-sdk-version': string;
        };
    };
    withCredentials: {
        headers: {
            'qiscus-sdk-token': string;
            'qiscus-sdk-user-id': string;
            'qiscus-sdk-app-id': string;
            'qiscus-sdk-version': string;
        };
    };
    withBaseUrl: {
        baseUrl: string;
    };
};
