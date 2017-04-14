"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var NumberButtonComponent = (function () {
    function NumberButtonComponent() {
    }
    Object.defineProperty(NumberButtonComponent.prototype, "text", {
        get: function () {
            return String(this.value);
        },
        enumerable: true,
        configurable: true
    });
    NumberButtonComponent.prototype.ngOnInit = function () {
        console.log(this.text);
    };
    NumberButtonComponent.prototype.onClick = function () {
        this.calc.total += this.value;
    };
    return NumberButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], NumberButtonComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(), core_1.Output(),
    __metadata("design:type", Object)
], NumberButtonComponent.prototype, "calc", void 0);
NumberButtonComponent = __decorate([
    core_1.Component({
        selector: 'calc-num-button',
        templateUrl: '../abstract.button/abstract.button.component.html',
        styleUrls: ['../abstract.button/abstract.button.component.scss']
    }),
    __metadata("design:paramtypes", [])
], NumberButtonComponent);
exports.NumberButtonComponent = NumberButtonComponent;
//# sourceMappingURL=number.button.component.js.map