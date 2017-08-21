import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';

import { Kiosk } from '../kiosk.model';

@Component({
  selector: 'hk-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.scss']
})
export class KioskComponent implements OnInit {
  kiosk: Kiosk;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) => {
        console.log(data);
        this.kiosk = data.kiosk;
      });
  }
}
