import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Kiosk } from './kiosk.model';
import { KioskService } from './kiosk.service';

@Injectable()
export class KioskResolver implements Resolve<any> {


  constructor(private kioskService: KioskService,
              private router: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    let id = route.params.kioskId;

    return this.kioskService.getKiosk(id).map((kiosk: Kiosk | null | undefined) => {
      if (kiosk) {
        return kiosk;
      } else {
        this.router.navigate(['/']);
      }
    });
  }
}
