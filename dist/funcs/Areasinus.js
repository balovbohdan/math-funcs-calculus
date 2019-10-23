"use strict";
// https://en.wikipedia.org/wiki/Inverse_hyperbolic_functions
// https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D0%B1%D0%BE%D0%BB%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8
Object.defineProperty(exports, "__esModule", { value: true });
const Ln_1 = require("./Ln");
exports.Areasinus = {
    name: 'Areasinus',
    calc: (n) => {
        const underSquareRoot = Math.pow(n, 2) + 1;
        const squareRoot = Math.sqrt(underSquareRoot);
        return Ln_1.Ln.calc(squareRoot + n);
    },
    calcDerivative: (n) => {
        const underSquareRoot = Math.pow(n, 2) + 1;
        const divider = Math.sqrt(underSquareRoot);
        return 1 / divider;
    },
};
//# sourceMappingURL=Areasinus.js.map