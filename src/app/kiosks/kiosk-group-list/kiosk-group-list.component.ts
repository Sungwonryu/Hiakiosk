import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Kiosk } from '../models/kiosk.model';
import { KioskGroup } from '../models/kiosk-group.model';
import { KioskService } from '../services/kiosk.service';

@Component({
  selector: 'hk-kiosk-group-list',
  templateUrl: './kiosk-group-list.component.html',
  styleUrls: ['./kiosk-group-list.component.scss']
})
export class KioskGroupListComponent implements OnInit {
  kioskGroupList: Observable<KioskGroup[]>


  constructor(private kioskService: KioskService) { }

  ngOnInit() {
    this.kioskGroupList = this.kioskService.getKioskGroupList();
  }

}
