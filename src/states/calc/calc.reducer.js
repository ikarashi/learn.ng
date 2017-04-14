"use strict";
var calc_action_1 = require("./calc.action");
var initialState = {
    count: 0,
    text: '0',
    mode: 'PLS',
    isFirstPush: true
};
exports.calcReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case calc_action_1.calcActionTypes.SET_COUNT: {
            var count = action.payload;
            return Object.assign({}, state, {
                count: count,
                text: String(count)
            });
        }
        case calc_action_1.calcActionTypes.SET_TEXT: {
            var text = action.payload;
            return Object.assign({}, state, {
                text: text,
                isFirstPush: false
            });
        }
        case calc_action_1.calcActionTypes.CHANGE_MODE: {
            var mode = action.payload;
            return Object.assign({}, state, {
                mode: mode,
                isFirstPush: true
            });
        }
        default: {
            return state;
        }
    }
};
//# sourceMappingURL=calc.reducer.js.map