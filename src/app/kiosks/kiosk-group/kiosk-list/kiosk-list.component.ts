import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

import { KioskGroup } from '../../models/kiosk-group.model';

@Component({
  selector: 'hk-kiosk-list',
  templateUrl: './kiosk-list.component.html',
  styleUrls: ['./kiosk-list.component.scss']
})
export class KioskListComponent implements OnInit {
  kioskGroup: KioskGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        this.kioskGroup = data.kioskGroup;
        console.log('KioskGroupComponent.data', data);
      })
  }
}
