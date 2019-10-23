// Root Mean Square Error.

import { MSE } from './MSE';
import { Func } from './types';

export const RootMSE:Func = {
    name: 'RootMSE',

    calc: (idealValues:number[], values:number[]):number => {
        const mse = MSE.calc(idealValues, values);

        return Math.sqrt(mse);
    },
};
