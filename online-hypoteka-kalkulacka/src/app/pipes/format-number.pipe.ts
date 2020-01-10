import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: any, selectedCulture: any): any {
    if (value === 0) {
      return null;
    }
    if (!value) {
      return;
    }
    const userLang = navigator.language;
    if (selectedCulture) {
      return new Intl.NumberFormat(selectedCulture).format(value);
    } else {
      console.log(userLang);
      return new Intl.NumberFormat(userLang).format(value);
    }
  }

}
