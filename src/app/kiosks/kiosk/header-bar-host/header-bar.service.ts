import { Injectable } from '@angular/core';
import { ComponentHostService } from '../../../shared/component-host/component-host.service';

import { HeaderBar } from './header-bar.model';
import { NycferryHeaderBarComponent } from './nycferry-header-bar/nycferry-header-bar.component';

@Injectable()
export class HeaderBarService extends ComponentHostService {
  settingsList = [
    {
      "componentId": 1,
      "componentName": "nyc-ferry-header-bar",
      "component": NycferryHeaderBarComponent
    }
  ];
  componentList: HeaderBar[];

  constructor() {
    super();
    this.setComponentList();
  }

  setComponentList() {
    this.componentList = this.settingsList.map((settings) => {
      return new HeaderBar(settings);
    });
  }
}
