"use strict";
// Mean Square Error.
Object.defineProperty(exports, "__esModule", { value: true });
const reduceIdealValues = (idealValues, values) => {
    const cb = (prev, idealValue, i) => prev + Math.pow(idealValue - values[i], 2);
    return idealValues.reduce(cb, 0);
};
const checkValues = (idealValues, values) => {
    const valuesQty = values.length;
    if (idealValues.length === valuesQty)
        return;
    throw new MseError('Values quantity mismatch.');
};
exports.MSE = {
    name: 'MSE',
    calc: (idealValues, values) => {
        checkValues(idealValues, values);
        const dividend = reduceIdealValues(idealValues, values);
        return dividend / values.length;
    },
};
class MseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = (new Error()).stack;
    }
}
//# sourceMappingURL=MSE.js.map