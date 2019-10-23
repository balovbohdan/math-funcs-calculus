import { Func } from './types';

export const RationalSigmoid:Func = {
    name: 'RationalSigmoid',
    calcDerivative: (n:number):number => n,
    calc: (n:number):number => n / (1 + Math.abs(n)),
};
