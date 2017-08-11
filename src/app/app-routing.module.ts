import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskListComponent } from './kiosks/kiosk-list/kiosk-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'kiosks', pathMatch: 'full' },
  { path: 'kiosks', component: KiosksComponent, children: [
    { path: '', component: KioskListComponent }
  ]},
  { path: '**', redirectTo: 'kiosks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
