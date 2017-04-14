"use strict";
exports.calcActionTypes = {
    SET_COUNT: 'SET_COUNT',
    SET_TEXT: 'SET_TEXT',
    CHANGE_MODE: 'CHANGE_MODE'
};
var CalcSetCountAction = (function () {
    function CalcSetCountAction(payload) {
        this.payload = payload;
        this.type = exports.calcActionTypes.SET_COUNT;
    }
    return CalcSetCountAction;
}());
exports.CalcSetCountAction = CalcSetCountAction;
var CalcSetTextAction = (function () {
    function CalcSetTextAction(payload) {
        this.payload = payload;
        this.type = exports.calcActionTypes.SET_TEXT;
    }
    return CalcSetTextAction;
}());
exports.CalcSetTextAction = CalcSetTextAction;
var CalcChangeModeAction = (function () {
    function CalcChangeModeAction(payload) {
        this.payload = payload;
        this.type = exports.calcActionTypes.CHANGE_MODE;
    }
    return CalcChangeModeAction;
}());
exports.CalcChangeModeAction = CalcChangeModeAction;
//# sourceMappingURL=calc.action.js.map