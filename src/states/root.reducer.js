"use strict";
var store_1 = require("@ngrx/store");
var reselect_1 = require("reselect");
var calc_reducer_1 = require("./calc/calc.reducer");
var reducers = {
    calc: calc_reducer_1.calcReducer
};
exports.rootReducer = function (state, action) {
    return store_1.combineReducers(reducers)(state, action);
};
exports.getCalcState = function (state) { return state.calc; };
exports.getCalcCount = reselect_1.createSelector(exports.getCalcState, function (state) { return state.count; });
exports.getCalcText = reselect_1.createSelector(exports.getCalcState, function (state) { return state.text; });
exports.getCalcMode = reselect_1.createSelector(exports.getCalcState, function (state) { return state.mode; });
exports.getCalcIsFirstPush = reselect_1.createSelector(exports.getCalcState, function (state) { return state.isFirstPush; });
//# sourceMappingURL=root.reducer.js.map