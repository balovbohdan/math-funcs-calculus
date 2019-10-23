"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("./Log");
exports.Ln = {
    name: 'Ln',
    calcDerivative: (n) => 1 / n,
    calc: (n) => Log_1.Log.calc(n, Math.E),
};
//# sourceMappingURL=Ln.js.map