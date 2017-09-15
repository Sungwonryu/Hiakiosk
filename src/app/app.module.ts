import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// kiosk
import { KiosksComponent } from './kiosks/kiosks.component';
import { KioskGroupListComponent } from './kiosks/kiosk-group-list/kiosk-group-list.component';
import { KioskGroupComponent } from './kiosks/kiosk-group/kiosk-group.component';
import { KioskListComponent } from './kiosks/kiosk-group/kiosk-list/kiosk-list.component';
import { KioskComponent } from './kiosks/kiosk-group/kiosk/kiosk.component';

// shared
import { ComponentHostDirective } from './shared/component-host/component-host.directive';

// headerBar
import { HeaderBarHostComponent } from './kiosks/kiosk-group/kiosk/header-bar-host/header-bar-host.component';
import { NycferryHeaderBarComponent } from './kiosks/kiosk-group/kiosk/header-bar-host/nycferry-header-bar/nycferry-header-bar.component';

// services
import { KioskService } from './kiosks/services/kiosk.service';
import { KioskResolver } from './kiosks/services/kiosk-resolver.service';
import { KioskGroupResolver } from './kiosks/services/kiosk-group-resolver.service';
import { HeaderBarHostService } from './kiosks/kiosk-group/kiosk/header-bar-host/header-bar-host.service';


@NgModule({
  declarations: [
    AppComponent,
    KiosksComponent,
    KioskGroupListComponent,
    KioskGroupComponent,
    KioskListComponent,
    KioskComponent,
    HeaderBarHostComponent,
    NycferryHeaderBarComponent,
    ComponentHostDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    KioskService,
    KioskGroupResolver,
    KioskResolver,
    HeaderBarHostService
  ],
  entryComponents: [
    NycferryHeaderBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
