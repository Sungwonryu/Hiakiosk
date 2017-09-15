import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskGroupListComponent } from './kiosks/kiosk-group-list/kiosk-group-list.component';
import { KioskGroupComponent } from './kiosks/kiosk-group/kiosk-group.component';
import { KioskListComponent } from './kiosks/kiosk-group/kiosk-list/kiosk-list.component';
import { KioskComponent } from './kiosks/kiosk-group/kiosk/kiosk.component';

import { KioskResolver } from './kiosks/services/kiosk-resolver.service';
import { KioskGroupResolver } from './kiosks/services/kiosk-group-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'kiosks', pathMatch: 'full' },
  {
    path: 'kiosks', component: KiosksComponent, children: [
      { path: '', component: KioskGroupListComponent },
      {
        path: ':kioskGroupId', component: KioskGroupComponent, children: [
          { path: '', component: KioskListComponent, resolve: { kioskGroup: KioskGroupResolver } },
          { path: ':kioskId', component: KioskComponent, resolve: { kioskData: KioskResolver } }
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'kiosks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
