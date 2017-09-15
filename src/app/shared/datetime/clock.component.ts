import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DatetimeService } from './datetime.service';

@Component({
  selector: 'hk-clock',
  template: `
  <span>{{ (time | async)| date: this.format }}</span><span *ngIf="hasOrdinalSuffix">{{ ordinalSuffix | async }}</span>
  `
})
export class ClockComponent implements OnInit {
  @Input('type') type: string;
  @Input('format') format: string;
  @Input('hasOrdinalSuffix') hasOrdinalSuffix: boolean;

  time: Observable<Date>;
  ordinalSuffix: Observable<string>;

  constructor(private datetimeService: DatetimeService) { }

  ngOnInit() {
    this.time = this.datetimeService.getDatetime(this.type);
    if (this.hasOrdinalSuffix) {
      this.ordinalSuffix = this.datetimeService.getDatetime(this.type)
        .map((time: Date) => {
          return this.getOrdinalSuffix(time.getDate());
        });
    }
  }

  getOrdinalSuffix(num: number) {
    // When num is a non-negative integer,
    // return an ordinal suffix
    if (Number.isInteger(num) && num >= 0) {
      // suffixList is an array of ordinal suffixes
      const suffixList = 'th st nd rd'.split(' ');
      // remainder is the last 2 digits in num
      let remainder = num % 100;
      // When num is 20 or greater than 20,
      // the suffixes are like 20th, 21st, 22nd, 23rd, 24th, 25th, ...... 29th in every 10
      // When num is less than 20,
      // the suffixes are 0th, 1st, 2nd, 3rd, 4th, 5th, ...... 19th
      return suffixList[(num - 20) % 10] || suffixList[remainder] || suffixList[0];
    }
  }
}
