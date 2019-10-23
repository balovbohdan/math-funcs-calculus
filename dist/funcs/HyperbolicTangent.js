"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HyperbolicTangent = {
    name: 'HyperbolicTangent',
    calc: (n) => {
        const ePowX = Math.pow(Math.E, n);
        const ePowMinusX = Math.pow(ePowX, -1);
        return (ePowX - ePowMinusX) / (ePowX + ePowMinusX);
    },
    calcDerivative: (n) => {
        const multiplicand = n + 1;
        const factor = n * -1 + 1;
        return multiplicand * factor;
    },
};
//# sourceMappingURL=HyperbolicTangent.js.map