import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Kiosk } from './kiosk.model';

@Injectable()
export class KioskService {
  jsonPath = '../../assets/json/';
  fileName = 'kiosk-list.json';
  kiosks: Kiosk[];
  kiosk: Kiosk;

  constructor(private http: Http) { }

  getList(): Observable<Kiosk[]> {
    return this.http.get(`${this.jsonPath}${this.fileName}`)
      .map((res: Response) => {
        this.kiosks = res.json().data.map((settings) => {
          return new Kiosk(settings);
        });
        return this.kiosks;
      });
  }

  getKioskById(id: number): Observable<any> {
    return this.http.get(`${this.jsonPath}${this.fileName}`)
      .map((res: Response) => {
        this.kiosk = res.json().data.find((settings) => {
          if (settings.id === id) {
            return new Kiosk(settings);
          }
        });
        return this.kiosk;
      });
  }
}
