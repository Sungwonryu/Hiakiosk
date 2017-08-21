import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Kiosk } from './kiosk.model';

@Injectable()
export class KioskService {
  path = '../../assets/json/';
  fileName = 'kiosk-list.json';
  url = `${this.path}${this.fileName}`;

  constructor(private http: Http) {}

  /**
   *  GetList() will return an Observable
   *  which will return an array of Kiosk instances
   */
  getList(): Observable<any> {
    return this.http.get(this.url)
      .map((res: Response) => {
        return res.json().data.map((settings) => {
          return new Kiosk(settings);
        });
      });
  }

  /**
   *  getKiosk() will return an Observable
   *  which will return undeinfed or a Kiosk instance
   *  whose id or name is matched with the param, id
   *
   *  param {string} id
   */
  getKiosk(id: string): Observable<any> {
    return this.http.get(this.url)
      .map((res: Response) => {
        const data = res.json().data;
        let matchedSettings: any;
        let matchedKiosk: Kiosk | undefined;

        // Check if id is a postive integer in string type
        if (id.length > 0 && Number.isInteger(+id) && +id > 0) {
          matchedSettings = data.find((settings) => {
            return settings.id === +id;
          });
        }

        // If matchedSettings is not found by comparing settings.id,
        // compare id with settings.name
        if (!matchedSettings) {
          matchedSettings = data.find((settings) => {
            return settings.name.toLowerCase() === id.toLowerCase();
          });
        }

        // If matchedSettings is found,
        // create an instance of Kiosk using the matchedSettings and return it
        // Otherwise undefined will be returned
        if (matchedSettings) {
          matchedKiosk = new Kiosk(matchedSettings);
        }
        return matchedKiosk;
      });
  }
}
