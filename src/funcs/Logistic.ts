import { Func } from './types';

export const Logistic:Func = {
    name: 'Logistic',
    calc: (n:number):number => 1 / (1 + Math.pow(Math.E, -n)),

    calcDerivative: (n:number) => {
        const factor = n * -1 + 1;

        return n * factor;
    },
};
