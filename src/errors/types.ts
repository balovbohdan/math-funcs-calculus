export type Func = {
    name:string;
    calc:(...args:any[])=>number|never;
};
