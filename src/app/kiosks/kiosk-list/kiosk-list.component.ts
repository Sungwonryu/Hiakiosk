import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Kiosk } from '../kiosk.model';
import { KioskService } from '../kiosk.service';

@Component({
  selector: 'hk-kiosk-list',
  templateUrl: './kiosk-list.component.html',
  styleUrls: ['./kiosk-list.component.scss']
})
export class KioskListComponent implements OnInit {
  kiosks: Observable<Kiosk[]>;

  constructor(private kioskService: KioskService) { }

  ngOnInit() {
    this.kiosks = this.kioskService.getList();
  }
}
