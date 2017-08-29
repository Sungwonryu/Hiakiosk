import { Injectable } from '@angular/core';
import { ComponentHost } from '../../../shared/component-host/component-host.model';
import { ComponentHostService } from '../../../shared/component-host/component-host.service';

import { NycferryHeaderBarComponent } from './nycferry-header-bar/nycferry-header-bar.component';

@Injectable()
export class HeaderBarHostService extends ComponentHostService {
  settingsList = [
    {
      "componentId": 1,
      "componentName": "nycferry-header-bar",
      "component": NycferryHeaderBarComponent
    }
  ];
  componentList: ComponentHost[];

  constructor() {
    super();
    this.setComponentList();
  }
}
