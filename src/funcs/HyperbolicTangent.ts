import { Func } from './types';

export const HyperbolicTangent:Func = {
    name: 'HyperbolicTangent',

    calc: (n:number):number => {
        const ePowX = Math.pow(Math.E, n);
        const ePowMinusX = Math.pow(ePowX, -1);

        return (ePowX - ePowMinusX) / (ePowX + ePowMinusX);
    },

    calcDerivative: (n:number) => {
        const multiplicand = n + 1;
        const factor = n * -1 + 1;

        return multiplicand * factor;
    },
};
