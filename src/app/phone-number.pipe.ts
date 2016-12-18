import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumberPipe'
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    return `Tel:+${value.substr(0,4)} ${value.substr(4,3)} ${value.substr(7,3)}`;
  }

}
