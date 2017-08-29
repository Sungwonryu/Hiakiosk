import { Injectable } from '@angular/core';
import { ComponentHost } from './component-host.model';

@Injectable()
export class ComponentHostService {
  settingsList: any[] = [];
  componentList: ComponentHost[];

  constructor() {
    // this.setComponentList();
  }

  setComponentList() {
    this.componentList = this.settingsList.map((settings) => {
      return new ComponentHost(settings);
    });
  }

  getComponentHost(componentId: number) {
    let matchedComponentHost = this.componentList.find((componentHost) => {
      return componentHost.componentId === componentId;
    });

    if (matchedComponentHost) {
      return matchedComponentHost;
    }
  }
}
