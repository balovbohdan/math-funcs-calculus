"use strict";
// http://lib.kstu.kz:8300/tb/books/E-FIZIKA-1/Phys-I/1_8_3-book.htm
// http://physics-lectures.ru/mexanicheski-kolebaniya-i-volny/7-7-zatuxayushhie-kolebaniya/
Object.defineProperty(exports, "__esModule", { value: true });
const defParams = {
    delta: 1,
    omega: 1,
    aZero: .3,
    phiZero: 0,
};
const prepareParams = (params = {}) => {
    params = Object.assign({}, params);
    const preparedParams = Object.assign({}, defParams, params);
    return Object.freeze(preparedParams);
};
exports.FadingOscillator = {
    name: 'FadingOscillator',
    calcDerivative: (n) => n,
    calc: (t, params = {}) => {
        const { delta, aZero, omega, phiZero } = prepareParams(params);
        const exponent = -delta * t;
        const right = Math.cos(omega * t + phiZero);
        const asymptote = aZero * Math.pow(Math.E, exponent);
        return asymptote * right;
    },
};
//# sourceMappingURL=FadingOscillator.js.map