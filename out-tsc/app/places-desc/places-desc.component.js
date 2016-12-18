var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var PlacesDescComponent = (function () {
    function PlacesDescComponent() {
        this.followers = 0;
        this.following = 0;
        this.image = 'assets/images/b1.jpg';
        this.alt = '';
    }
    PlacesDescComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(PlacesDescComponent.prototype, "place", {
        set: function (p) {
            this.followers = p.followers;
            this.following = p.following;
            this.image = p.image;
            this.alt = p.alt;
        },
        enumerable: true,
        configurable: true
    });
    ;
    return PlacesDescComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PlacesDescComponent.prototype, "place", null);
PlacesDescComponent = __decorate([
    Component({
        selector: 'app-places-desc',
        templateUrl: './places-desc.component.html',
        styleUrls: ['./places-desc.component.css']
    }),
    __metadata("design:paramtypes", [])
], PlacesDescComponent);
export { PlacesDescComponent };
//# sourceMappingURL=../../../../src/app/places-desc/places-desc.component.js.map