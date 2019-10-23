import { Func } from './types';

export const ZeroLinear:Func = {
    name: 'ZeroLinear',
    calc: (_?:number):number => 0,
    calcDerivative: (_?:number):number => 0,
};
