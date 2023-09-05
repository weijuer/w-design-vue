import { type Numeric } from "./typings";

export const isObject = (val: unknown): val is Record<any, any> =>
    val !== null && typeof val === 'object';

export const isDef = <T>(val: T): val is NonNullable<T> =>
    val !== undefined && val !== null;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
    typeof val === 'function';

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
    isObject(val) && isFunction(val.then) && isFunction(val.catch);

export const isDate = (val: unknown): val is Date =>
    Object.prototype.toString.call(val) === '[object Date]' &&
    !Number.isNaN((val as Date).getTime());

export const inBrowser = typeof window !== 'undefined';

export function isMobile(value: string): boolean {
    value = value.replace(/[^-|\d]/g, '');
    return (
        /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value)
    );
}

export const isIOS = (): boolean =>
    inBrowser
        ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
        : false;

export const isNumeric = (val: Numeric): val is string =>
    typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);