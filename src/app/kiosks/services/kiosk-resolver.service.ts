import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import { KioskGroup } from '../models/kiosk-group.model';
import { Kiosk } from '../models/kiosk.model';
import { KioskService } from './kiosk.service';

@Injectable()
export class KioskResolver implements Resolve<any> {

  constructor(
    private kioskService: KioskService,
    private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    let kioskGroupId = route.parent.params.kioskGroupId;
    let kioskId = route.params.kioskId;

    const kioskGroupRequest = this.kioskService.getKioskGroup(kioskGroupId);
    const kioskRequest = this.kioskService.getKiosk(kioskGroupId, kioskId);

    return Observable.forkJoin([
      kioskGroupRequest,
      kioskRequest
    ])
      .map((data: any[]) => {
        const kioskGroup = data[0];
        const kiosk = data[1];

        // If the matched kiosk is found, return the matched kiosk,
        // otherwise navigate to '../'
        if (kiosk) {
          return {
            kioskGroup: kioskGroup,
            kiosk: kiosk
          };
        } else {
          this.router.navigate(['../']);
        }
      });
  }
}
