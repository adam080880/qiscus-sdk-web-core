import { Stream, Subscription } from 'xstream';
import { Subscription as Subs, IQCallback2 as Callback2, IQCallback1 as Callback1 } from '../defs';
export declare const toPromise: <T>(stream: Stream<T>) => Promise<T>;
export declare const toCallback: <T>(callback: Callback1 | Callback2<T>) => (stream: Stream<T>) => void;
export declare const toCallbackOrPromise: <T>(callback?: Callback1 | Callback2<T> | null | undefined) => (stream: Stream<T>) => void | Promise<T>;
export declare const tryCatch: <T>(fn: () => T, onError: (error: Error) => void) => void;
export declare const process: <T>(item: T, ...checkers: Function[]) => Stream<T>;
export declare const tap: <T>(onNext: (value: T) => void, onError?: ((error: Error) => void) | undefined, onComplete?: (() => void) | undefined) => (stream: Stream<T>) => Stream<T>;
export declare const bufferUntil: <T>(fn: () => boolean) => (stream: Stream<T>) => Stream<T>;
export declare const subscribeOnNext: <T extends unknown>(onNext: (value: T) => void) => (stream: Stream<T>) => Subscription;
declare type Func<T extends any[]> = (...data: T) => void;
export declare const toEventSubscription: <T extends any[]>(eventSubscribe: (handler: Func<T>) => Subs) => (stream: Stream<Func<T>>) => () => void;
export declare const toEventSubscription_: <T extends unknown>(handler: (data: T) => void, onError?: ((error: Error) => void) | undefined) => (stream: Stream<T>) => () => void;
export {};
