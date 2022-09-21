declare const _catchAllSymbol: unique symbol;
export declare function match(...args: any[]): any;
export declare function when(props?: any): string | typeof _catchAllSymbol;
export declare namespace when {
    var __uid: number;
    var or: (...args: any[]) => string;
    var and: (...args: any[]) => string;
    var range: (start: any, end: any) => string;
    var unserialize: (serializedKey: any, value: any) => {
        match: typeof _true;
        result: any;
        position: number;
    } | {
        match: (input: any) => any;
        result: any;
        position: any;
    };
}
declare function _true(): boolean;
export {};
