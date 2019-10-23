"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ln_1 = require("./Ln");
exports.Log = {
    name: 'Log',
    calc: (n, base) => Math.log(n) / Math.log(base),
    calcDerivative: (n, base) => 1 / (n * Ln_1.Ln.calc(base)),
};
//# sourceMappingURL=Log.js.map