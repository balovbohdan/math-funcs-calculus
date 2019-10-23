export const BinaryStep = {
    name: 'BinaryStep',
    calcDerivative: (_?:number):number => 0,
    calc: (n:number):number => n < 0 ? 0 : 1,
};
