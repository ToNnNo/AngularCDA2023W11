import {Component, DEFAULT_CURRENCY_CODE, Inject, LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent {

  /*locale = 'en';
  devise = 'USD';*/

  date = new Date();

  /**
   * public locale: string
   *
   * constructor(@Inject(LOCALE_ID) locale: string) {
   *   this.locale = locale
   * }
   * */
  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DEFAULT_CURRENCY_CODE) public devise: string
  ) { }
}
