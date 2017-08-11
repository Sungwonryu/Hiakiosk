import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskListComponent } from './kiosks/kiosk-list/kiosk-list.component';
import { KioskComponent } from './kiosks/kiosk/kiosk.component';
import { HeaderBarsComponent } from './kiosks/kiosk/header-bars/header-bars.component';

import { KioskService } from './kiosks/kiosk.service';
import { KioskResolver } from './kiosks/kiosk-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    KiosksComponent,
    KioskListComponent,
    KioskComponent,
    HeaderBarsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    KioskService,
    KioskResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
