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
var PhoneNumberPipe = (function () {
    function PhoneNumberPipe() {
    }
    PhoneNumberPipe.prototype.transform = function (value) {
        return "Tel:+" + value.substr(0, 4) + " " + value.substr(4, 3) + " " + value.substr(7, 3);
    };
    return PhoneNumberPipe;
}());
PhoneNumberPipe = __decorate([
    Pipe({
        name: 'phoneNumberPipe'
    }),
    __metadata("design:paramtypes", [])
], PhoneNumberPipe);
export { PhoneNumberPipe };
//# sourceMappingURL=../../../src/app/phone-number.pipe.js.map