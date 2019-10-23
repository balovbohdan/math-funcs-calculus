import { Log } from './Log';
import { Func } from './types';

export const Ln:Func = {
    name: 'Ln',
    calcDerivative: (n:number):number => 1 / n,
    calc: (n:number):number => Log.calc(n, Math.E),
};
