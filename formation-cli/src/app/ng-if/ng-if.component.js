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
var NgIfComponent = /** @class */ (function () {
    function NgIfComponent() {
        this.isDisplay = true;
        this.isClick = true;
        this.formation = new Formation_1.Formation('Module Angular', 'description');
    }
    NgIfComponent.prototype.onclick = function () {
        this.isClick = !this.isClick;
    };
    NgIfComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.isDisplay = !_this.isDisplay;
        }, 2000);
    };
    NgIfComponent = __decorate([
        core_1.Component({
            selector: 'app-ng-if',
            templateUrl: './ng-if.component.html',
            styleUrls: ['./ng-if.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], NgIfComponent);
    return NgIfComponent;
}());
exports.NgIfComponent = NgIfComponent;
//# sourceMappingURL=ng-if.component.js.map