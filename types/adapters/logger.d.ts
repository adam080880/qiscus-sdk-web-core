import { Storage } from '../storage';
export declare function getLogger(s: Storage): {
    readonly isEnabled: boolean;
    setEnable: (enable: boolean) => void;
    log: (...args: any[]) => void;
};
