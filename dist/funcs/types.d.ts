export declare type Func = {
    name: string;
    calc(...args: any): number;
    calcDerivative: (...args: any) => number;
};
