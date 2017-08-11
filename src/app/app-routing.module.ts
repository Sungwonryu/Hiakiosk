import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskListComponent } from './kiosks/kiosk-list/kiosk-list.component';
import { KioskComponent } from './kiosks/kiosk/kiosk.component';

import { KioskResolver } from './kiosks/kiosk-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: 'kiosks', pathMatch: 'full' },
  { path: 'kiosks', component: KiosksComponent, children: [
    { path: '', component: KioskListComponent },
    { path: ':kioskId', component: KioskComponent, resolve: { kiosk: KioskResolver } }
  ]},
  { path: '**', redirectTo: 'kiosks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
