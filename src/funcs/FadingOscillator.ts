// http://lib.kstu.kz:8300/tb/books/E-FIZIKA-1/Phys-I/1_8_3-book.htm
// http://physics-lectures.ru/mexanicheski-kolebaniya-i-volny/7-7-zatuxayushhie-kolebaniya/

import { Func } from './types';

export type Params = {
    delta?:number;
    aZero?:number;
    omega?:number;
    phiZero?:number;
};

type ParamsPrepared = {
    delta:number;
    aZero:number;
    omega:number;
    phiZero:number;
};

const defParams:ParamsPrepared = {
    delta: 1,
    omega: 1,
    aZero: .3,
    phiZero: 0,
};

const prepareParams = (params:Params = {}):Readonly<ParamsPrepared> => {
    params = Object.assign({}, params);

    const preparedParams = Object.assign({}, defParams, params);

    return Object.freeze(preparedParams);
};

export const FadingOscillator:Func= {
    name: 'FadingOscillator',
    calcDerivative: (n:number):number => n,

    calc: (t:number, params:Params = {}):number => {
        const { delta, aZero, omega, phiZero } = prepareParams(params);
        const exponent = -delta * t;
        const right = Math.cos(omega * t + phiZero);
        const asymptote = aZero * Math.pow(Math.E, exponent);

        return asymptote * right;
    },
};
