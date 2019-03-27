"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var formation_component_1 = require("./formation/formation.component");
var interpolate_component_1 = require("./interpolate/interpolate.component");
var binding_component_1 = require("./binding/binding.component");
var forms_1 = require("@angular/forms");
var evenement_component_1 = require("./evenement/evenement.component");
var variable_component_1 = require("./variable/variable.component");
var ng_if_component_1 = require("./ng-if/ng-if.component");
var for_component_1 = require("./for/for.component");
var ngstyle_component_1 = require("./ngstyle/ngstyle.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                formation_component_1.FormationComponent,
                interpolate_component_1.InterpolateComponent,
                binding_component_1.BindingComponent,
                evenement_component_1.EvenementComponent,
                variable_component_1.VariableComponent,
                ng_if_component_1.NgIfComponent,
                for_component_1.ForComponent,
                ngstyle_component_1.NgstyleComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map