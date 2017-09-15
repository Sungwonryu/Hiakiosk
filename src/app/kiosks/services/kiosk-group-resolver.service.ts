import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { KioskGroup } from '../models/kiosk-group.model';
import { KioskService } from './kiosk.service';

@Injectable()
export class KioskGroupResolver implements Resolve<any> {

  constructor(
    private kioskService: KioskService,
    private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    let kioskGroupId = route.params.kioskGroupId;
    return this.kioskService.getKioskGroup(kioskGroupId)
      .map((kioskGroup: KioskGroup | null | undefined) => {

        // If the matched kioskGroup is found,
        // return the matched kioskGroup,
        // otherwise navigate to '../'
        if (kioskGroup) {
          return kioskGroup;
        } else {
          this.router.navigate(['../kiosks']);
        }
      })
  }
}
