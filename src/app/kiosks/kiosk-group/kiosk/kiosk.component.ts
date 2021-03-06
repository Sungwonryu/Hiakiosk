import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

import { KioskGroup } from '../../models/kiosk-group.model';
import { Kiosk } from '../../models/kiosk.model';

@Component({
  selector: 'hk-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss']
})
export class KioskComponent implements OnInit {
  kioskGroup: KioskGroup;
  kiosk: Kiosk;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.kioskGroup = data.kioskData.kioskGroup;
        this.kiosk = data.kioskData.kiosk;
        console.log('KioskComponent.data: ', data);
      });
  }
}
