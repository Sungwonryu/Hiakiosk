import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Kiosk } from './kiosk.model';
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

    let kioskId = route.params.kioskId;
    return this.kioskService.getKiosk(kioskId).map((kiosk: Kiosk | null | undefined) => {
      // If the matched kiosk is found, return the matched kiosk,
      // otherwise navigate to '../'
      if (kiosk) {
        return kiosk;
      } else {
        this.router.navigate(['../']);
      }
    });
  }
}
