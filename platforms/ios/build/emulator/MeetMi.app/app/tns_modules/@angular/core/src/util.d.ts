declare const _global: {
    [name: string]: any;
};
/**
 * Attention: whenever providing a new value, be sure to add an
 * entry into the corresponding `....externs.js` file,
 * so that closure won't use that global for its purposes.
 */
export { _global as global };
export declare function getSymbolIterator(): string | symbol;
export declare function scheduleMicroTask(fn: Function): void;
export declare function looseIdentical(a: any, b: any): boolean;
export declare function stringify(token: any): string;
