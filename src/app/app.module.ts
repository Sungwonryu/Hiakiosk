import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// kiosk
import { KioskGroupListComponent } from './kiosks/kiosk-group-list/kiosk-group-list.component';
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
import { HeaderBarHostService } from './kiosks/kiosk/header-bar-host/header-bar-host.service';


@NgModule({
  declarations: [
    AppComponent,
    KiosksComponent,
    KioskListComponent,
    KioskComponent,
    HeaderBarHostComponent,
    NycferryHeaderBarComponent,
    ComponentHostDirective,
    KioskGroupListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KioskService,
    KioskResolver,
    HeaderBarHostService
  ],
  entryComponents: [
    NycferryHeaderBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
