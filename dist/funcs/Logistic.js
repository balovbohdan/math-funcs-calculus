"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistic = {
    name: 'Logistic',
    calc: (n) => 1 / (1 + Math.pow(Math.E, -n)),
    calcDerivative: (n) => {
        const factor = n * -1 + 1;
        return n * factor;
    },
};
//# sourceMappingURL=Logistic.js.map