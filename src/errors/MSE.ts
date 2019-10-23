// Mean Square Error.

import { Func } from './types';

const reduceIdealValues = (idealValues:number[], values:number[]):number => {
    const cb = (prev, idealValue, i) => prev + Math.pow(idealValue - values[i], 2);

    return idealValues.reduce(cb, 0);
};

const checkValues = (idealValues:number[], values:number[]):void|never => {
    const valuesQty = values.length;

    if (idealValues.length === valuesQty) return;

    throw new MseError('Values quantity mismatch.');
};

export const MSE:Func = {
    name: 'MSE',

    calc: (idealValues:number[], values:number[]):number|never => {
        checkValues(idealValues, values);

        const dividend = reduceIdealValues(idealValues, values);

        return dividend / values.length;
    },
};

class MseError extends Error {
    constructor(message:string) {
        super(message);

        this.message = message;
        this.stack = (new Error()).stack;
    }

    readonly message:string;
    readonly stack:string|undefined;
}
