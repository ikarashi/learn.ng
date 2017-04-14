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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var store_devtools_1 = require("@ngrx/store-devtools");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./components/app/app.component");
var number_button_component_1 = require("./components/number.button/number.button.component");
var eval_button_component_1 = require("./components/eval.button/eval.button.component");
var text_component_1 = require("./components/text/text.component");
var root_reducer_1 = require("./states/root.reducer");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            store_1.StoreModule.provideStore(root_reducer_1.rootReducer),
            store_devtools_1.StoreDevtoolsModule.instrumentStore()
        ],
        declarations: [
            app_component_1.AppComponent,
            number_button_component_1.NumberButtonComponent,
            eval_button_component_1.EvalButtonComponent,
            text_component_1.TextComponent
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map