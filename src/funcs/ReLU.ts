import { Func } from './types';

export const ReLU:Func = {
    name: 'ELU',
    calc: (n:number):number => n < 0 ? 0 : n,
    calcDerivative: (n:number):number => n < 0 ? 0 : 1,
};
