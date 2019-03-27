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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Formation_1 = require("../model/Formation");
var ForComponent = /** @class */ (function () {
    function ForComponent() {
        this.formations = [];
    }
    ForComponent.prototype.ngOnInit = function () {
        this.formations = [
            new Formation_1.Formation('Module Angular'),
            new Formation_1.Formation('Module JavaScript'),
            new Formation_1.Formation('Module TypeScript'),
        ];
    };
    ForComponent = __decorate([
        core_1.Component({
            selector: 'app-for',
            templateUrl: './for.component.html',
            styleUrls: ['./for.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ForComponent);
    return ForComponent;
}());
exports.ForComponent = ForComponent;
//# sourceMappingURL=for.component.js.map