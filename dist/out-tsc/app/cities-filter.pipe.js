var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
var CitiesFilterPipe = (function () {
    function CitiesFilterPipe() {
    }
    CitiesFilterPipe.prototype.transform = function (value, populationMin, populationMax) {
        if (populationMin !== -1 && populationMax !== -1) {
            return value.filter(function (city) { return city.population >= populationMin && city.population <= populationMax; });
        }
        if (populationMin !== -1) {
            return value.filter(function (city) { return city.population >= populationMin; });
        }
        if (populationMax !== -1) {
            return value.filter(function (city) { return city.population <= populationMax; });
        }
        return value;
    };
    return CitiesFilterPipe;
}());
CitiesFilterPipe = __decorate([
    Pipe({
        name: 'citiesFilter'
    }),
    __metadata("design:paramtypes", [])
], CitiesFilterPipe);
export { CitiesFilterPipe };
//# sourceMappingURL=../../../src/app/cities-filter.pipe.js.map