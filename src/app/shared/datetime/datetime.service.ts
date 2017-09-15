import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/share';


@Injectable()
export class DatetimeService {
  time: Observable<any>;

  constructor() {
    this.time = Observable.interval(1000);
  }

  getDatetime(datetimeType: string) {
    switch (datetimeType) {
      case 'CURRENT_TIME':
        return this.time
          .map(() => new Date()).share();
      default:
        return this.time
          .share();
    }
  }
}
