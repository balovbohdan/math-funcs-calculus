import { Func } from './types';

export const UnitLinear:Func = {
    name: 'UnitLinear',
    calc: (_?:number):number => 1,
    calcDerivative: (_?:number):number => 1,
};
