export declare function Get(endpoint: string, header?: object | null, optionalApiAddress?: string | null): Promise<any>;
export declare function Post(endpoint: string, body: object | string | null, header?: object | null, optionalApiAddress?: object | null): Promise<any>;
export declare function Patch(endpoint: string, body: object | string | null, header?: null, optionalApiAddress?: null): Promise<any>;
export declare function Put(endpoint: string, body: object | string | null, header?: null, optionalApiAddress?: null): Promise<any>;
export declare function Delete(endpoint: string, body: object | string | null, header?: null, optionalApiAddress?: null): Promise<any>;
declare function Configurate(api?: string, getAuthorization?: () => string): void;
declare const _default: {
    Configurate: typeof Configurate;
};
export default _default;
