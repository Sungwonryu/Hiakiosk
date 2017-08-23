import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// kiosk
import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskListComponent } from './kiosks/kiosk-list/kiosk-list.component';
import { KioskComponent } from './kiosks/kiosk/kiosk.component';

// headerBar
import { HeaderBarHostComponent } from './kiosks/kiosk/header-bar-host/header-bar-host.component';
import { NycferryHeaderBarComponent } from './kiosks/kiosk/header-bar-host/nycferry-header-bar/nycferry-header-bar.component';

// shared
import { ComponentHostDirective } from './shared/component-host/component-host.directive';

// services
import { KioskService } from './kiosks/kiosk.service';
import { KioskResolver } from './kiosks/kiosk-resolver.service';
import { HeaderBarService } from './kiosks/kiosk/header-bar-host/header-bar.service';


@NgModule({
  declarations: [
    AppComponent,
    KiosksComponent,
    KioskListComponent,
    KioskComponent,
    HeaderBarHostComponent,
    NycferryHeaderBarComponent,
    ComponentHostDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    KioskService,
    KioskResolver,
    HeaderBarService
  ],
  entryComponents: [
    NycferryHeaderBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
