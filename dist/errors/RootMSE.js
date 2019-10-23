"use strict";
// Root Mean Square Error.
Object.defineProperty(exports, "__esModule", { value: true });
const MSE_1 = require("./MSE");
exports.RootMSE = {
    name: 'RootMSE',
    calc: (idealValues, values) => {
        const mse = MSE_1.MSE.calc(idealValues, values);
        return Math.sqrt(mse);
    },
};
//# sourceMappingURL=RootMSE.js.map