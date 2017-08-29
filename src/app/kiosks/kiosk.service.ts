import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { Kiosk } from './kiosk.model';
import { KioskGroup } from './kiosk-group.model';

@Injectable()
export class KioskService {
  kioskList: Kiosk[];
  kioskGroupList: KioskGroup[];

  // constructor(private http: Http) {
  constructor(private httpClient: HttpClient) { }

  /**
   *  getData() will return an Observable
   *  which will return an array of data objects for each http call
   */
  getData(): Observable<any> {
    const jsonPath = '../../assets/json/';
    const kioskListFile = 'kiosk-list.json';
    const kioskGroupListFile = 'kiosk-group-list.json';
    const kioskListUrl = `${jsonPath}${kioskListFile}`;
    const kioskGroupListUrl = `${jsonPath}${kioskGroupListFile}`;

    return Observable.forkJoin([
      // Change http to httpClient
      // this.http.get(kioskListUrl).map((res: Response) => res.json().kioskList),
      // this.http.get(kioskGroupListUrl).map((res: Response) => res.json().kioskGroupList)
      this.httpClient.get<any>(kioskListUrl).map((res) => res.kioskList),
      this.httpClient.get<any>(kioskGroupListUrl).map((res) => res.kioskGroupList)
    ]);
  }

  /**
   *  getList() will return an Observable
   *  which will return an array of Kiosk instances
   *  after setting kioskGroup properties
   */
  getList(): Observable<Kiosk[]> {
    if (this.kioskList) {
      // If this.kioskList exists,
      // return an Observable of this.kioskList
      return Observable.of(this.kioskList);
    } else {
      // If this.kioskList doesn't exist,
      // return an Observable of this.kioskList after getting the data from this.getData()
      return this.getData().map((data: any[]) => {
        let kioskSettingsList = data[0];
        let kioskGroupSettingsList = data[1];

        this.kioskList = kioskSettingsList.map((kioskSettings) => {
          // Find the matched kioskGroup from kioskGroupSettingsList
          // and set it as kioskSettings.kioskGroup
          let matchedKioskGroup = this.getMatchedKioskGroup(kioskGroupSettingsList, kioskSettings.kioskGroup.kioskGroupId);
          kioskSettings.kioskGroup = matchedKioskGroup;

          return new Kiosk(kioskSettings);
        });

        return this.kioskList;
      });
    }
  }

  /**
   *  getKiosk() will return an Observable
   *  which will return undefined or the instance of Kiosk
   *  whose id or name is matched with the param, kioskId
   *
   *  param {string} kioskId
   */
  getKiosk(kioskId: string): Observable<any> {
    if (this.kioskList) {
      return Observable.of(this.getMatchedKiosk(this.kioskList, kioskId));
    } else {
      return this.getList().map((kioskList: Kiosk[]) => {
        return this.getMatchedKiosk(kioskList, kioskId);
      });
    }
  }

  /**
   *  getMatchedKioskGroup() will return the kioskGroup
   *  whose id is matched with the parameter kioskId
   *
   *  param {string} kioskId
   */
  private getMatchedKioskGroup(kioskGroupSettingsList: any[], kioskGroupId: string) {
    let matchedKioskGroupSettings = kioskGroupSettingsList.find((kioskGroupSettings) => {
      return kioskGroupSettings.id === kioskGroupId;
    });

    if (matchedKioskGroupSettings) {
      return new KioskGroup(matchedKioskGroupSettings);
    } else {
      console.log('matchedKioskGroupSettings is not found by using kioskGroupId: ', kioskGroupId);
    }
  }

  /**
   *  getMatchedKiosk() will return undefined or the instance of Kiosk
   *  whose id or name is matched with the parameter kioskId
   *
   *  param {string} kioskId
   */
  private getMatchedKiosk(kioskList: Kiosk[], kioskId: string) {
    let matchedKiosk;

    // Check if kioskId is a postive integer in string type
    // If so, compare KioskId with kiosk.id
    if (kioskId.length > 0 && Number.isInteger(+kioskId) && +kioskId > 0) {
      matchedKiosk = kioskList.find((kiosk: Kiosk) => {
        return kiosk.id === +kioskId;
      });
    }

    // If the matchedKiosk is not found by comparing kioskId and kiosk.id,
    // compare kioskId with kiosk.name
    if (!matchedKiosk) {
      matchedKiosk = kioskList.find((kiosk: Kiosk) => {
        return kiosk.name.toLowerCase() === kioskId.toLowerCase();
      });
    }

    // If the matchedKiosk is found, the matchedKisok will be returned
    // Otherwise undefined will be returned
    if (!matchedKiosk) {
      console.log('matchedKiosk is not found by using kioskId: ', kioskId);
    }
    return matchedKiosk;
  }
}
