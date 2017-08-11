import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskListComponent } from './kiosks/kiosk-list/kiosk-list.component';

import { KioskService } from './kiosks/kiosk.service';

@NgModule({
  declarations: [
    AppComponent,
    KiosksComponent,
    KioskListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    KioskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
