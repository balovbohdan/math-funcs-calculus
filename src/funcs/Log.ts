import { Ln } from './Ln';
import { Func } from './types';

export const Log:Func = {
    name: 'Log',
    calc: (n:number, base:number) => Math.log(n) / Math.log(base),
    calcDerivative: (n:number, base:number):number => 1 / (n * Ln.calc(base)),
};
