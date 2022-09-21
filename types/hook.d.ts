export declare const Hooks: {
    MESSAGE_BEFORE_SENT: string;
    MESSAGE_BEFORE_RECEIVED: string;
};
export declare function hookAdapterFactory(): {
    trigger: <T extends unknown>(hook: string, payload: T) => Promise<T>;
    triggerBeforeReceived$: <T_1 extends unknown>(payload: T_1) => Promise<T_1>;
    intercept: <T_2 extends unknown>(hook: string, callback: (data: T_2) => T_2) => () => void;
};
