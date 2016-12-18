var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CityDescComponent = (function () {
    function CityDescComponent() {
        this.populationMin = -1;
        this.populationMax = -1;
        this.chooseCity = new EventEmitter();
    }
    CityDescComponent.prototype.ngOnInit = function () {
    };
    CityDescComponent.prototype.filter = function (event) {
        var a = event.target;
        var href = a.getAttribute("href");
        switch (href) {
            case "ALL":
                this.populationMin = -1;
                this.populationMax = -1;
                break;
            case "BIG":
                this.populationMin = 1000;
                this.populationMax = -1;
                break;
            case "MIDDLE":
                this.populationMin = 500;
                this.populationMax = 999;
                break;
            case "SMALL":
                this.populationMin = -1;
                this.populationMax = 499;
                break;
            default:
                break;
        }
        return false;
    };
    CityDescComponent.prototype.choose = function (city) {
        this.currentCity = city;
        this.chooseCity.emit(this.currentCity);
    };
    return CityDescComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], CityDescComponent.prototype, "cityList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CityDescComponent.prototype, "currentCity", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CityDescComponent.prototype, "chooseCity", void 0);
CityDescComponent = __decorate([
    Component({
        selector: 'app-city-desc',
        templateUrl: './city-desc.component.html',
        styleUrls: ['./city-desc.component.css']
    }),
    __metadata("design:paramtypes", [])
], CityDescComponent);
export { CityDescComponent };
//# sourceMappingURL=../../../../src/app/city-desc/city-desc.component.js.map