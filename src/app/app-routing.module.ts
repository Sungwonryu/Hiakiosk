import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KiosksComponent } from './kiosks/kiosks.component';

const routes: Routes = [
  { path: '', redirectTo: 'kiosks', pathMatch: 'full' },
  { path: 'kiosks', component: KiosksComponent },
  { path: '**', redirectTo: 'kiosks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
