import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Kiosk } from './kiosk.model';
import { KioskService } from './kiosk.service';

@Injectable()
export class KioskResolver implements Resolve<Kiosk> {

  constructor(private kioskService: KioskService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Kiosk> | Promise<Kiosk> | Kiosk {

    return this.kioskService.getKioskById(+route.params.kioskId);
  }
}
