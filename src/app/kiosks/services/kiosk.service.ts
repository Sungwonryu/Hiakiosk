import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

import { KioskGroup } from '../models/kiosk-group.model';
import { Kiosk } from '../models/kiosk.model';
import { KioskConfig } from '../models/kiosk-config.model';


@Injectable()
export class KioskService {

  kioskGroupListData: any[];
  kioskGroupList: KioskGroup[];
  kioskList: Kiosk[];

  assetsPath = '../../assets/';
  kioskGroupListFilePath = 'shared/json/kiosk-group-list.json';

  constructor(private httpClient: HttpClient) { }

  /**
   *  getData() will return an Observable
   *  which will return an array of data objects for each httpClient call
   */
  getData(): Observable<any> {

    return this.httpClient
      .get<any>(`${this.assetsPath}${this.kioskGroupListFilePath}`)
      .switchMap((res) => {
        this.kioskGroupListData = res.data;

        // kioskConfigListDataRequests is an array of Observables
        // which return kioskConfigListData for each kioskGroup
        const kioskConfigListDataRequests = this.kioskGroupListData.map((kioskGroupData) => {
          return this.httpClient
            .get<any>(`${this.assetsPath}${kioskGroupData.data.kioskConfigListFilePath}`)
            .map((res) => res.data);
        });

        // kioskListDataRequests is an array of Observables
        // which return kioskListData for each kioskGroup
        const kioskListDataRequests = this.kioskGroupListData.map((kioskGroupData) => {
          return this.httpClient
            .get<any>(`${this.assetsPath}${kioskGroupData.data.kioskListFilePath}`)
            .map((res) => res.data);
        });

        return Observable.forkJoin([
          ...kioskConfigListDataRequests,
          ...kioskListDataRequests
        ]);
      });
  }

  /**
   *  getKioskGroupList() will return an Observable
   *  which will return an array of KioskGroup instances, this.kioskGroupList
   *  after setting kioskGroupList properties
   */
  getKioskGroupList(): Observable<any> {
    if (this.kioskGroupList) {

      // If this.kioskGroupList exists,
      // return an Observable of this.kioskGroupList
      return Observable.of(this.kioskGroupList);
    } else {

      // If this.kioskGroupList doesn't exist,
      // return an Observable of this.kioskGroupList
      // after getting the data from this.getData()
      return this.getData()
        .map((data: any) => {
          this.kioskGroupList = this.kioskGroupListData.map((kioskGroupData, index) => {
            const kioskConfigListData: any = data[index];
            const kioskListData: any = data[this.kioskGroupListData.length + index];

            const kioskList = kioskListData.map((kioskData: any) => {
              const matchedKioskConfigData = this.getMatchedItem(kioskConfigListData, kioskData.kioskConfig.id);
              kioskData.kioskConfig = new KioskConfig(matchedKioskConfigData);

              return new Kiosk(kioskData);
            });

            kioskGroupData.kioskList = kioskList;
            return new KioskGroup(kioskGroupData);
          });

          return this.kioskGroupList;
        });
    }
  }

  /**
   *  getKioskGroup() will return an Observable
   *  which will return undefined or an instance of KioskGroup
   *  whose id or name is matched with the param, kioskGroupId
   *
   *  param {string} kioskGroupId
   */
  getKioskGroup(kioskGroupId: any): Observable<any> {
    if (this.kioskGroupList) {

      // If this.kioskGroupList exists,
      // return an Observable of the matched kioskGroup
      return Observable.of(this.getMatchedItem(this.kioskGroupList, kioskGroupId));
    } else {

      // If this.kioskGroupList doesn't exist,
      return this.getKioskGroupList().map(() => {
        return this.getMatchedItem(this.kioskGroupList, kioskGroupId);
      });
    }
  }

  /**
   *  getKiosk() will return an Observable
   *  which will return undefined or an instance of Kiosk
   *  whose id or name is matched with the param, kioskId
   *
   *  param {string} kioskGroupId
   *  param {string} kioskId
   */
  getKiosk(kioskGroupId: any, kioskId: any): Observable<any> {
    return this.getKioskGroup(kioskGroupId).map((kioskGroup) => {
      let matchedKiosk;
      if (kioskGroup) {
        matchedKiosk = this.getMatchedItem(kioskGroup.kioskList, kioskId);
      }
      return matchedKiosk;
    })
  }

  /**
   *  getMatchedItem() will return undefined or the item
   *  whose id or name is matched with the parameter id
   *
   *  param {Array} itemList
   *  param {string} id
   */
  private getMatchedItem(itemList: any[], id: any) {
    if (typeof id !== 'string') {
      id = id.toString();
    }

    let matchedItem;

    // Check if id is a postive integer in string type
    // If so, compare id with item.id
    if (id.length > 0 && Number.isInteger(+id) && +id > 0) {
      matchedItem = itemList.find((item: any) => {
        return item.id === +id;
      });
    }

    // If the matchedItem is not found by comparing id and item.id,
    // compare id with item.name
    if (!matchedItem) {
      matchedItem = itemList.find((item: any) => {
        return item.name.toLowerCase() === id.toLowerCase();
      });
    }

    // If the matchedItem is found, the matchedItem will be returned
    // Otherwise undefined will be returned
    if (!matchedItem) {
      console.log('matchedItem is not found by using id: ', id);
    }
    return matchedItem;
  }
}
