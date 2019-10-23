"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReLU = {
    name: 'ELU',
    calc: (n) => n < 0 ? 0 : n,
    calcDerivative: (n) => n < 0 ? 0 : 1,
};
//# sourceMappingURL=ReLU.js.map